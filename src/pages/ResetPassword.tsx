import {NOTIFY_TYPE, notify} from "../constants";
import React, {useState} from 'react';

import { DefaultOuterRootCont } from '../components/Containers'
import EmailIcon from '@material-ui/icons/Email';
import FilledButton from '../components/Buttons'
import  FormFooter from '../layout/FormFooter'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import {InputCont} from "../components/InputCont";
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink } from 'react-router-dom'
import TopSection from '../components/TopSection';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles"
import theme from '../theme';

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
    width: '310px',
    flexDirection: 'column',
    marginLeft: theme.spacing(3.5)
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
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
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
    justifyContent:'space-between'
  }
}))

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

  const hasError = (field: string): boolean => formState.touched[field] && formState.errors[field]

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

  const [formState, setFormState] = useState<SignInFormState>({
    isValid: false,
    values: {
      email: '',
      password: ''
    },
    touched: {},
    errors: {}
  })

    const classes = useStyles()
    
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
                    value={formState.values.email}
                    handleChange={handleChange}
                    type='email'
                    isError={hasError('email')}
                    helperText={hasError('email') ? formState.errors.email[0] : null}
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
              type="submit"
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
  setAccessToken: any,
  setIsPending: (isPending: boolean) => void,
  notifySubmitSuccess: (msg: string) => void,
  notifySubmitFailure: (msg: string) => void,
}

export default ResetPassword;