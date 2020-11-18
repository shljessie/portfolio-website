import {NOTIFY_TYPE, notify} from "../../../constants";
import React, {useEffect, useState} from "react";

import FilledButton from "../../../components/Buttons/RoundButton";
import {IMG_URL_PREFIX} from "../SignInV2";
import {InputCont} from "./InputCont";
import {ResetPasswordDialog} from "./ResetPasswordDialog";
import {getRefreshToken} from "../../../shared/API";
import {makeStyles} from "@material-ui/core/styles";
import validate from "validate.js";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inputCont: {
    padding: theme.spacing(2, 1, 0),
  },
  inputLabel: {
    fontSize: '14px'
  },
  input: {
    paddingTop: theme.spacing(1.5),
  },
  forgotPasswordCont: {
    margin: theme.spacing(3, 1, 0),
    fontSize: '14px',
    color: '#33A9F4',
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  buttonCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    width: '100%'
  },
  inputIcon: {
    height: '20px',
  }
}))

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

type SignInInputs = {
  email: string,
  password: string
}

type SignInFormState = {
  isValid: boolean,
  values: SignInInputs,
  touched: any,
  errors: any
}

const SignInPage = (props: Props) => {

  const { setAccessToken, setIsPending, notifySubmitSuccess, notifySubmitFailure } = props

  const classes = useStyles()

  const [formState, setFormState] = useState<SignInFormState>({
    isValid: false,
    values: {
      email: '',
      password: ''
    },
    touched: {},
    errors: {}
  })
  const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState(false)

  const hasError = (field: string): boolean => formState.touched[field] && formState.errors[field]

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

  const handleChange = (event: any) => {
    event.persist()

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }))
  }

  const handleSignIn = async (event: any) => {
    event.preventDefault()
    setIsPending(true)

    getRefreshToken(formState.values as SignInInputs).then((resp) => {
        if (resp.status === 200) {
          localStorage.setItem('refresh_token', resp.data.refresh_token)
          return localStorage.getItem('refresh_token')
        }
      }
    ).then((rtn) => {
      setAccessToken(rtn)
      notify('login success!', NOTIFY_TYPE.SUCCESS)
      setIsPending(false)

    }).catch(e => {
      switch (e.response.status) {
        case 401:
          // notifySubmitFailure('Email or password is incorrect.')
          notify('Email or password is incorrect.', 'error')
          break;
        case 403:
          notify('Email has not been confirmed.', NOTIFY_TYPE.ERROR)
          break;
        default:
      }
      setIsPending(false)
    })
  }

  return (
    <div className={classes.root}>
      <ResetPasswordDialog
        isOpen={isResetPasswordDialogOpen}
        onClose={() => setIsResetPasswordDialogOpen(false)}
        setIsPending={setIsPending}
        notifySubmitSuccess={notifySubmitSuccess}
        notifySubmitFailure={notifySubmitFailure}
      />
      <form onSubmit={handleSignIn}>
        <InputCont
          label='EMAIL'
          name='email'
          value={formState.values.email}
          handleChange={handleChange}
          type='email'
          inputIconComp={<img src={IMG_URL_PREFIX + '/Icon_email.png'} alt='email_icon' className={classes.inputIcon} />}
          isError={hasError('email')}
          helperText={hasError('email') ? formState.errors.email[0] : null}
          color='#000'
          className={classes.inputCont}
        />

        <InputCont
          label='PASSWORD'
          name='password'
          value={formState.values.password}
          handleChange={handleChange}
          type='password'
          inputIconComp={<img src={IMG_URL_PREFIX + '/Icon_password.png'} alt='password_icon' className={classes.inputIcon} />}
          isError={hasError('password')}
          helperText={hasError('password') ? formState.errors.password[0] : null}
          color='#000'
          className={classes.inputCont}
        />


        <div className={classes.buttonCont}>
          <FilledButton
            isFilled={true}
            fullWidth={false}
            style={{padding: '10px 60px'}}
            disabled={!formState.isValid}
            type="submit"
          >
            LOGIN
          </FilledButton>
          <div className={classes.forgotPasswordCont} onClick={() => setIsResetPasswordDialogOpen(true)}>
          Forgot your password?
        </div>
        </div>
      </form>
    </div>
  )
}

type Props = {
  setAccessToken: any,
  setIsPending: (isPending: boolean) => void,
  notifySubmitSuccess: (msg: string) => void,
  notifySubmitFailure: (msg: string) => void,
}

export default SignInPage