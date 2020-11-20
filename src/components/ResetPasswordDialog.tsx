import {NOTIFY_TYPE, notify} from "../constants";
import React, {useEffect, useState} from "react";

import {Dialog} from "@material-ui/core";
import FilledButton from "../components/Buttons"
import {InputCont} from "./InputCont";
import {StyledDialogContent} from "../components/StyledDialogContent";
import {StyledDialogTitle} from "../components/StyledDialogTitle";
import {makeStyles} from "@material-ui/core/styles";
import {postForgotPassword} from "../shared/API";
import validate from "validate.js";

const useStyles = makeStyles(theme => ({
  root: {
  },
  titleCont: {
    fontSize: '30px',
    lineHeight: '24px',
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: '0.15px',
  },
  bodyText: {
    marginTop: theme.spacing(2),
    lineHeight: '24px',
    maxWidth: '420px',
  },
  inputCont: {
    marginTop: theme.spacing(4),
    margin: '0 auto'
  },
  buttonCont: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(3, 0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: theme.spacing(1, 5),
    width: '50%',
    maxWidth: '140px',
    margin: theme.spacing(0, 1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 1.5),
    },
    color: theme.palette.background.paper,
    borderRadius: '16px',
  }
}))

const schema = {
  email: {
    presence: {allowEmpty: false, message: 'is requried'},
    email: true,
    length: {
      maximum: 64
    }
  }
}

type EmailInput = {
  isValid: boolean,
  value: {[key: string]: string},
  touched: boolean,
  errors: {[key: string]: string[]}
}

export const ResetPasswordDialog = (props: Props) => {

  const {isOpen, onClose, setIsPending, notifySubmitSuccess, notifySubmitFailure } = props

  const classes = useStyles()
  const [emailInput, setEmailInput] = useState<EmailInput>({
    isValid: false,
    value: {email: ''},
    touched: false,
    errors: {
      email: []
    }
  })

  useEffect(() => {
    const errors = validate(emailInput.value, schema)

    setEmailInput(
      EmailInput => ({
        ...EmailInput,
        isValid: !errors,
        errors: !errors ? {email: []} : errors
      })
    )
  }, [emailInput.value])

  const refreshForm = () => {
    setEmailInput({
      isValid: false,
      value: {email: ''},
      touched: false,
      errors: {
        email: []
      }
    })
  }

  const submitForgotPassword = async (event: any, onClose: () => void) => {
    event.preventDefault()

    setIsPending(true)

    try {
      await postForgotPassword(emailInput.value.email).then((resp) => {
        notify('We sent an email with reset password Link.\nPlease check the inbox of your email account.',
          NOTIFY_TYPE.SUCCESS)
      })
    } catch (e) {
      notify('There was a problem with sending an email. Please try again later.', NOTIFY_TYPE.ERROR)
    }
    setIsPending(false)
    refreshForm()
    onClose()
  }

  const handleEmailInput = (event: any) => {
    event.persist()

    setEmailInput(emailInput => ({
      ...emailInput,
      value: {
        ...emailInput.value,
        email: event.target.value
      },
      touched: true
    }))
  }

  const hasError = (): boolean => emailInput.touched && emailInput.errors.email.length > 0

  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.root}}>
      <div style={{width: '100%'}}>
        <StyledDialogTitle>
          <div className={classes.titleCont}>
            Password Reset
          </div>
        </StyledDialogTitle>
        <StyledDialogContent>
          <div className={classes.bodyText}>
            Enter your Cochl email address that you used to register.
            We'll send you an email with a link to reset your password.
          </div>

          <InputCont
            label='Email Address'
            name='email'
            value={emailInput.value.email}
            handleChange={handleEmailInput}
            type='email'
            isError={hasError()}
            helperText={hasError() ? emailInput.errors.email[0] : undefined}
            className={classes.inputCont}
          />

          <div className={classes.buttonCont}>
            <FilledButton onClick={onClose} className={classes.button}>
              Cancel
            </FilledButton>
            <FilledButton
              onClick={(event: any) => submitForgotPassword(event, onClose)}
              className={classes.button}
              disabled={!emailInput.isValid}
            >
              Submit
            </FilledButton>
          </div>
        </StyledDialogContent>
      </div>
    </Dialog>
  )
}

type Props = {
  isOpen: boolean,
  onClose: () => void,
  setIsPending: (isPending: boolean) => void,
  notifySubmitSuccess: (msg: string) => void
  notifySubmitFailure: (msg: string) => void
}