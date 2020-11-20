import {NOTIFY_TYPE, notify} from "../constants";
import React, {useEffect, useState} from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles"

import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import FilledButton from '../components/Buttons'
import InputAdornment from '@material-ui/core/InputAdornment';
import {InputCont} from "../components/InputCont";
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import TopSection from '../components/TopSection';
import Typography from '@material-ui/core/Typography';
import {getRefreshToken} from "../shared/API";
import styled from 'styled-components';
import theme from '../theme';
import validate from "validate.js";

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  align-items: center;
`

const SocialButton = styled(Button)`
  flex: 1;
  min-height: 48px;
  width: 80%;
  color: 'white';
  margin: 5px;
  text-align: center;
`


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
    marginBottom: theme.spacing(3.5)
  },
  inputCont: {
    padding: theme.spacing(2, 1, 0),
  },
  inputLabel:{
    textAlign:'start'
  },
  submit: {
    marginTop: theme.spacing(3),
    backgroundColor: '#000',
  },
  link: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
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


 const Login = (props: Props)=>{
  const { setAccessToken, setIsPending, notifySubmitSuccess, notifySubmitFailure } = props

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

    const classes = useStyles()
    
  return(
    <>
    <TopSection/>
    <div className={classes.root}>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <form className={classes.form}>
        <div className={classes.inputs}>
        <Typography variant= "h6" style={{ textAlign: 'start', marginBottom: theme.spacing(2), color:'white', fontSize:'24px'}}>
           Log in 
        </Typography>
                  <InputCont
                    label='EMAIL'
                    name='email'
                    value={formState.values.email}
                    handleChange={handleChange}
                    type='email'
                    isError={hasError('email')}
                    helperText={hasError('email') ? formState.errors.email[0] : null}
                    color='black'
                    className={classes.inputCont}
                  />
                  <InputCont
                    label='PASSWORD'
                    name='password'
                    value={formState.values.password}
                    handleChange={handleChange}
                    type='password'
                    isError={hasError('password')}
                    helperText={hasError('password') ? formState.errors.password[0] : null}
                    color='#000'
                    className={classes.inputCont}
                  />
              
        </div>
         
         <div>
          <FilledButton
            type="submit"
            fullWidth
            variant="contained"
            style={{width:'133px',  height: '41px', borderRadius: '0px'}}
          >
            Log in
          </FilledButton>
          <Link component={RouterLink} to="resetpassword" className={classes.link}> 
            Forgot Password? 
          </Link>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', marginTop: theme.spacing(2) }}>
          <Divider style={{width: '40%', backgroundColor: 'gray', marginTop: theme.spacing(1.5), marginRight: theme.spacing(1.5),marginLeft: theme.spacing(1.5)}}></Divider>
          <Typography variant="body2" style={{color: 'gray'}}>Or</Typography>
          <Divider style={{width: '40%', backgroundColor: 'gray', marginTop: theme.spacing(1.5), marginLeft: theme.spacing(1.5)}}></Divider>
        </div>

        <SocialButtons>
              <SocialButton
                startIcon={<img width="22" height="22" src={"/"} />}
                style={{ backgroundColor: '#000' }}
              >
                <Typography variant="button" style={{color: 'white'}}>
                  Log in with Google
                </Typography>
              </SocialButton>
              <SocialButton
                style={{ backgroundColor: '#000' }}
              >
                <FacebookIcon style={{color:'#FFFFFF', marginRight: '12px'}}/>
                <Typography variant="button" style={{color: 'white'}}>
                  Log in with Facebook
                </Typography>
              </SocialButton>
        </SocialButtons>
         
         <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
         <Typography variant="body1" style={{color:'white', fontSize: '12px', marginTop: theme.spacing(1.5)}}>
           Don't have an account?
         </Typography>
         <Link component={RouterLink} to="signup" className={classes.linkTwo}>Sign up</Link>
         </div>

         
        </form>
      </Paper>
      <img  src= { `https://picsum.photos/id/${3}/400/500`} alt='login_image' style={{height: '500px', marginLeft: theme.spacing(5)}}/>
    </main>
    </div>
    <div className={classes.footer}>
    <Link component={RouterLink} to="register">
      <Typography variant="body1" style={{color:'white', fontSize: '12px', marginLeft: theme.spacing(10)}}>
            Terms of Service
      </Typography>
    </Link>
    <Link component={RouterLink} to="register">
    <Typography variant="body1" style={{color:'white', fontSize: '12px', marginLeft: theme.spacing(10)}}>
           Privacy
    </Typography>
    </Link>
    <Link component={RouterLink} to="register">
    <Typography variant="body1" style={{color:'white', fontSize: '12px', marginLeft: theme.spacing(10)}}>
           Contact us
    </Typography>
    </Link>
    </div>
    </>
        )
}

type Props = {
  setAccessToken: any,
  setIsPending: (isPending: boolean) => void,
  notifySubmitSuccess: (msg: string) => void,
  notifySubmitFailure: (msg: string) => void,
}

export default Login;