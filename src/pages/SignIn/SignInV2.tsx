import {
  Backdrop,
  CircularProgress,
  Divider,
  Portal,
  Snackbar,
  Tab,
  Tabs,
} from "@material-ui/core";
import {NOTIFY_TYPE, SnackBar, notify} from "../../constants";
import React, { useEffect, useState } from 'react'
import {Theme, makeStyles} from "@material-ui/core/styles"
import {createStyles, withStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";

import Alert from "@material-ui/lab/Alert";
import {Redirect} from 'react-router-dom'
import {RootState} from "../../store/modules";
import {SignInPage} from "./components";
import SignUpPage from "./components/SignUpPage";
import {SnsCont} from "./components/SnsCont";
import { getUserInfo } from "../../shared/API"
import {signInActions} from "../../store/modules/SignInManager";
import {signUpActions} from "../../store/modules/signUpStateManager";
import validate from "validate.js"

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
}

export const IMG_URL_PREFIX = 'https://cochl-images.s3.ap-northeast-2.amazonaws.com/dashboard'

// background animation effect
// https://codepen.io/tedmcdo/pen/PqxKXg
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    // backgroundImage: `url(${IMG_URL_PREFIX}/Login_background2.png)`,
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(12),
    width: '100%',
    height: '100%',
    minWidth: '400px',
    overflow: 'hidden',
    transition: 'all 0.5s ease-in-out',
    [theme.breakpoints.down(1200)]: {
      width: 0,
      minWidth: 'unset',
      padding: theme.spacing(12, 0),
    }
  },
  right: {
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(6),
    minWidth: '320px',
    width: '960px',
    transition: 'all 0.5s ease-in-out',
    [theme.breakpoints.down(1200)]: {
      width: '100%',
    },
    [theme.breakpoints.down(600)]: {
      // transform: 'translateX(-100%)',
      padding: theme.spacing(0, 2)
    }
  },
  title: {
    marginTop: theme.spacing(2),
    width: '300px',
  },
  divider: {
    margin: theme.spacing(4, 0, 2),
    width: '180px',
    height: '2px',
    background: 'rgba(255, 255, 255, 0.6)'
  },
  titleCont: {
    fontSize: '20px',
    fontWeight: 500,
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  slideCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.5s ease-in-out',
    opacity: 1,
    minWidth: '400px',
    height: '100%',
    [theme.breakpoints.down(1200)]: {
      opacity: 0,
    }
  },
  footer: {
    fontSize: '12px',
    opacity: 0.5,
    bottom: 0,
    height: '30px'
  },
  formCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100% - 84px)',
  },
  formTitle: {
    marginBottom: theme.spacing(2),
    fontSize: '40px',
    fontStyle: 'italic',
    fontWeight: 500
  },
  inputCont: {
    paddingTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
  inputLabel: {
    fontSize: '14px'
  },
  input: {
    paddingTop: theme.spacing(1.5),
  },
  hintCont: {
    marginTop: theme.spacing(3),
    fontSize: '14px',
  },
  buttonCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    width: '100%'
  },
  switchCont: {
    textAlign: 'center',
    fontSize: '14px',
    marginTop: theme.spacing(4)
  },
  inputIcon: {
    height: '26px',
  },
  tabCont: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    },
  },
  backdrop: {
    zIndex: Math.max(theme.zIndex.drawer, theme.zIndex.modal, theme.zIndex.tooltip, theme.zIndex.snackbar) + 1,
    color: '#fff'
  },
  closeIcon: {
    padding: theme.spacing(0.5),
  },
}))

const TABS: string[] = ['Log In', 'Sign Up']

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      // minWidth: '350px',
      fontStyle: 'italic',
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '24px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '26px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '28px'
      },
      // [theme.breakpoints.down(980)]: {
      //   width: '50%'
      // },
      // [theme.breakpoints.down(500)]: {
      //   width: 'unset'
      // }
    },
  }),
)(Tab);

const SignInV2 = (props: Props) => {

  const { authenticated, setAccessToken, setAuthenticated, location, history } = props

  const classes = useStyles()
  const dispatch = useDispatch()
  const { isSignedUp, email } = useSelector((state: RootState) => state.signUp)
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  })
  const [snackBarOpen, setSnackBarOpen] = useState<SnackBar>({
    open: false,
    message: '',
    state: undefined
  })
  const [tabIdx, setTabIdx] = React.useState(0);
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    if (isSignedUp) {
      setTabIdx(0)
      notify('Sign up success. Please check your mail to confirm email address.', NOTIFY_TYPE.SUCCESS)
      dispatch(signUpActions.updateSignUpState(false, ''))
    }
  }, [isSignedUp])

  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setTabIdx(newIndex);
  }

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      getUserInfo()
        .then((resp) => {
          setAuthenticated(true)
          dispatch(signInActions.saveUserInfo(resp.data))
        })
        .catch(e => {
          if(e.response){
            if (e.response.status === 401) {
              if (localStorage.getItem('refresh_token')) {
                setAccessToken(localStorage.getItem('refresh_token'))
              }
            }
          }

        })
    } else if (localStorage.getItem('refresh_token')) {
      setAccessToken(localStorage.getItem('refresh_token'))
    }
  })

  useEffect(() => {
    const errors = validate(formState.values, schema)

    setFormState(
      formState => ({
        ...formState,
        isValid: !errors,
        errors: errors || {}
      })
    )
  }, [formState.values])

  const notifySubmitSuccess = (msg: string) => {
    setSnackBarOpen({
      open: true,
      message: msg,
      state: 'success'
    })
  }

  const notifySubmitFailure = (msg: string) => {
    setSnackBarOpen({
      open: true,
      message: msg,
      state: 'error'
    })
  }

  const handleClose = () => {
    setSnackBarOpen({ open: false, message: '', state: undefined })
    setIsPending(false)
  }

  // 기존 origin 을 찾아서 어디서 부터 왔는지 저장.
  const { from } = location.state || { form: { pathname: '/dashboard' } }
  if (authenticated) return <Redirect to={from}/>

  return (
    <div className={classes.root}>
      <Snackbar open={snackBarOpen.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackBarOpen.state}>
          {snackBarOpen.message}
        </Alert>
      </Snackbar>

      <Portal>
        <Backdrop className={classes.backdrop} open={isPending} onClick={handleClose} addEndListener={undefined}>
          <CircularProgress color="inherit"/>
        </Backdrop>
      </Portal>
      <img src={IMG_URL_PREFIX + '/Login_background2.png'} style={{zIndex: -1, height: '100%', position: 'absolute'}}/>

      <div className={classes.left}>
        <div className={classes.slideCont}>
          <div className={classes.titleCont}>
            WELCOME TO
            <img src={IMG_URL_PREFIX + '/Login_cochl.png'} className={classes.title}/>
            <Divider className={classes.divider}/>
            Login to Access Dashboard
          </div>
          <div className={classes.footer}>
            Creating ears for artificial intelligence
          </div>
        </div>
      </div>

      <div className={classes.right}>
        <Tabs
          value={tabIdx}
          onChange={handleTabChange}
          indicatorColor="primary"
          className={classes.tabCont}
          centered
          variant="fullWidth"
        >
          {
            TABS.map((tabName, i) => {
              return <StyledTab key={i} label={tabName}/>
            })
          }
        </Tabs>

        <div className={classes.formCont}>
          {
            tabIdx === 0
              ? <SignInPage
                setAccessToken={setAccessToken}
                setIsPending={setIsPending}
                notifySubmitSuccess={notifySubmitSuccess}
                notifySubmitFailure={notifySubmitFailure}
              />
              : <SignUpPage
                history={history}
                setIsPending={setIsPending}
                notifySubmitSuccess={notifySubmitSuccess}
                notifySubmitFailure={notifySubmitFailure}
                dispatch={dispatch}
              />
          }
          <SnsCont/>
        </div>
      </div>
    </div>

  )
}

export default SignInV2

type Props = {
  authenticated: boolean,
  signIn: any,
  setAccessToken: any,
  setAuthenticated: any,
  location: any,
  history: any
}