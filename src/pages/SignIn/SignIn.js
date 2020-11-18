import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Link,
  Snackbar,
  TextField,
  Typography
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Redirect, Link as RouterLink } from 'react-router-dom'
import { getRefreshToken, getUserInfo } from "../../shared/API"

import Alert from "@material-ui/lab/Alert"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from "@material-ui/core/styles"
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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    margin: theme.spacing(4, 0)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginTop: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    margin: theme.spacing(1, 0)
  },
  signInButton: {
    margin: theme.spacing(3, 0)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

const SignIn = ({ authenticated, signIn, setAccessToken, setAuthenticated, location, history }) => {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  })
  const [snackBarOpen, setSnackBarOpen] = useState({
    open: false,
    message: '',
    state: undefined
  })
  const [isPending, setIsPending] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      getUserInfo()
        .then((resp) => {
          setAuthenticated(true)
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

  const hasError = field => formState.touched[field] && formState.errors[field] ? true : false

  const handleBack = () => history.go(-1)

  const handleChange = event => {
    event.persist()

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }))
  }

  const handleSignIn = async event => {
    event.preventDefault()
    setIsPending(true)

    getRefreshToken(formState.values).then((resp) => {
        if (resp.status === 200) {
          localStorage.setItem('refresh_token', resp.data.refresh_token)
          return localStorage.getItem('refresh_token')
        }
      }
    ).then((rtn) => {
      setAccessToken(rtn)
      setSnackBarOpen({
        open: true,
        message: 'login Success',
        state: 'success'
      })
      setIsPending(false)
    }).catch(e => {
      switch (e.response.status) {
        case 401:
          setSnackBarOpen({
            open: true,
            message: 'Email or password is incorrect.',
            state: 'error'
          })
          break;
        case 403:
          setSnackBarOpen({
            open: true,
            message: 'Email has not been confirmed.',
            state: 'error'
          })
          break;
        default:
      }
      setIsPending(false)
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

      <Backdrop className={classes.backdrop} open={isPending} onClick={handleClose} addEndListener={undefined}>
        <CircularProgress color="inherit"/>
      </Backdrop>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.content}
          item
          lg={12}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon/>
                asdf
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleSignIn}
              >
                <Typography
                  className={classes.title}
                  variant='h2'
                >
                  Sign In
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError('email')}
                  fullWidth
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  label="Email address"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('password')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>

                <Typography
                  color="textSecondary"
                  variant="body1"
                  className={classes.socialIcon}
                >
                  Don't have an account?{' '}

                  <Link
                    component={RouterLink}
                    to="/sign-up"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
                <Typography
                  className={classes.socialIcon}
                  color="textSecondary"
                  variant="body1"
                >
                  {'If you forgot password? '}
                  <Link
                    component={RouterLink}
                    to="/user/forgot-password"
                    variant="h6"
                  >
                    Forgot password
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignIn
