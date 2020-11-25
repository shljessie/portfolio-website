import { Dialog, Link, Paper, Typography, makeStyles }  from '@material-ui/core';
import {NOTIFY_TYPE, notify} from "../constants";
import React, {useEffect, useState} from 'react';

import { DefaultOuterRootCont } from '../components/Containers'
import FilledButton from '../components/Buttons'
import  FormFooter from '../layout/FormFooter'
import {InputCont} from "../components/InputCont";
import { Link as RouterLink } from 'react-router-dom'
import TopSection from '../components/TopSection';
import {postForgotPassword} from "../shared/API";
import theme from '../theme';
import validate from "validate.js";

const useStyles = makeStyles(theme => ({
  root:{
    justifyContent: 'center',
    alignItems:'center',
    position:'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  main: {
    display: 'flex',
    flexDirection: 'row', 
  },
  paper: {
    width: '400px',
    heigth:'100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  inputs:{
    display:'flex',
    flexDirection: 'column',
  },
  inputCont: {
  },
  inputLabel:{
    textAlign:'start'
  },
  submit: {
    marginTop: theme.spacing(3),
    backgroundColor: '#000',
  },
  link: {
    margin: 'auto',
    color: '#8687FF',
    textDecoration: 'none'
  },
  linkTwo: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: '#8687FF',
    fontSize: '12px',
    textDecoration: 'none'
  },
  footer:{
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    top: '95%',
    left: '33%',
  },
  resetButton:{
    marginTop: theme.spacing(5),
    display:'flex',
    justifyContent:'space-between'
  },
  dialog:{
    
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

 const ResetPassword= (props :Props)=>{

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

    
  return(
    <>
    <TopSection/>
    <DefaultOuterRootCont>
    <div className={classes.root}>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <form className={classes.form}>
        <div className={classes.inputs}>
        <Typography variant= "h6" style={{ textAlign: 'start', marginBottom: theme.spacing(2), color:'white'}}> Reset your password </Typography>
              <InputCont
                    label='EMAIL'
                    name='email'
                    value={emailInput.value.email}
                    handleChange={handleEmailInput}
                    type='email'
                    isError={hasError()}
                    helperText={hasError() ?  emailInput.errors.email[0] : undefined}
                    color='black'
                    className={classes.inputCont}
                  />
              <Typography variant="body1" style={{color:'white', fontSize: '12px', marginTop: theme.spacing(1.5), textAlign: 'start'}}>
              Enter the email you use for your account and get a link to reset your password
              </Typography>
        </div>
         
         <div className={classes.resetButton}>
         <Link component={RouterLink} to="checkemail"> 
            <FilledButton
              onClick={(event: any) => submitForgotPassword(event, onClose)}
              fullWidth
              variant="contained"
              style={{width:'199px',  height: '41px', borderRadius: '0px'}}
            >
              Reset password
            </FilledButton>
          </Link>
          <Link component={RouterLink} to="/login" className={classes.link}> 
            Cancel
          </Link>
        </div>
        </form>
      </Paper>
      
      <img  src= { `https://picsum.photos/id/${3}/400/400`} alt='login_image' style={{height: '400px', marginLeft: theme.spacing(5)}}/>
    </main>
    </div>
      <FormFooter/>
    </DefaultOuterRootCont>  
    </>
        )
}



type Props = {
  isOpen: boolean,
  onClose: () => void,
  setIsPending: (isPending: boolean) => void,
  notifySubmitSuccess: (msg: string) => void,
  notifySubmitFailure: (msg: string) => void,
}

export default ResetPassword;