import {
  Button,
  Link,
  Paper,
  Typography,
  makeStyles,
}  from '@material-ui/core';
import {NOTIFY_TYPE, notify} from "../constants";
import React, {useEffect, useState} from 'react';
import {SignUpForm, postSignUp} from "../shared/API";

import { DefaultOuterRootCont } from '../components/Containers'
import { DividerComponent }  from '../layout/Divider'
import FacebookIcon from '@material-ui/icons/Facebook';
import FilledButton from '../components/Buttons'
import FormFooter from '../layout/FormFooter'
import FormHeader from '../layout/FormHeader';
import {InputCont} from "../components/InputCont";
import {RootState} from "../modules";
import { Link as RouterLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import {signUpActions} from "../modules/signUpStateManager";
import styled from 'styled-components';
import theme from '../theme';
import {useGoogleAnalytics} from "../hooks"
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
    padding: theme.spacing(2, 1, 0),
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
  },
  footer:{
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    top: '95%',
    left: '33%',
  }
}))

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
  },
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64,
    },
  },
}

type SignUpFormState = {
  isValid: boolean,
  values: SignUpForm,
  touched: any,
  errors: any
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  history: any,
  setIsPending: (isPending: boolean) => void,
  notifySubmitSuccess: (msg: string) => void,
  notifySubmitFailure: (msg: string) => void,
  dispatch: any,
}

type Props = StateProps & DispatchProps & OwnProps

 const Signup = (props: Props)=>{

  const classes = useStyles()
  const { setIsPending, notifySubmitSuccess, notifySubmitFailure, dispatch, isSignedUp, email, SignUpActions } = props

  const [formState, setFormState] = useState<SignUpFormState>({
    isValid: false,
    values: {
      email: '',
      password: '',
      confirm_password: '',
      firstname: '',
      lastname: '',
      company: '',
      job_title: '',
      subscribe_mailinglist: false,
      agree_term_1: false,
      agree_term_2: false
    },
    touched: {
      email: false,
      password: false,
      confirm_password: false,
      firstname: false,
      lastname: false,
      company: false,
      job_title: false,
      subscribe_mailinglist: false,
      agree_term_1: false,
      agree_term_2: false
    },
    errors: {
      email: [],
      password: [],
      confirm_password: [],
      firstname: [],
      lastname: [],
      roles: [],
      affiliation: [],
      industry: [],
      subscribe_mailinglist: [],
      agree_term_1: [],
      agree_term_2: []
    },
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

  const hasError = (field: string): boolean => formState.touched[field] && formState.errors[field]

  const handleChange = (event: any) => {
    event.persist();

    const target = event.target as HTMLInputElement
    setFormStateInput(target.name, target.type, target.value, target.checked)
  };

  const setFormStateInput = (
    inputName: string,
    inputType: string,
    inputValue: any,
    inputChecked?: boolean
  ) => {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [inputName]:
          inputType === 'checkbox' ? inputChecked : inputValue,
      },
      touched: {
        ...formState.touched,
        [inputName]: true,
      },
    }));
  }

  const handleSignUp = async (event: any) => {
    event.preventDefault()

    if (!validateConfirmPassword()) return

    setIsPending(true)

    try {
      const input = { ...formState.values, confirm_password: undefined }
      await postSignUp(input).then((resp) => {
        setIsPending(false)
        dispatch(SignUpActions.updateSignUpState(true, formState.values.email))
        useGoogleAnalytics.gaEvent('Sign Up', 'Create User', formState.values.email, 1)
      })

    } catch (e) {
      if (e.response && e.response.status === 409) {
        notify('There is already a user with this E-mail address.', NOTIFY_TYPE.ERROR)
      }
      setIsPending(false)
    }
  };

  const validateConfirmPassword = () => {
    const password = formState.values.password
    const confirmPassword = formState.values.confirm_password

    if (password !== confirmPassword) {
      notify('The passwords did not match.', NOTIFY_TYPE.ERROR)
      return false
    }
    return true
  }
    
  return(
    <>
    <FormHeader/>
    <DefaultOuterRootCont>
    <div className={classes.root}>
    <main className={classes.main}>
      <img  src= { `https://picsum.photos/id/${3}/400/400`} alt='login_image' style={{height: '400px', marginLeft: theme.spacing(5)}}/>

      <Paper className={classes.paper}>
        <form className={classes.form}>
        <div className={classes.inputs}>
        <Typography variant= "h6" style={{ textAlign: 'start', marginBottom: theme.spacing(2), color:'white', fontSize:'24px'}}> 
          Create your account
        </Typography>
                <InputCont
                  label='NAME'
                  name='name'
                  value={formState.values.firstname}
                  handleChange={handleChange}
                  isError={hasError('name')}
                  helperText={hasError('name') ? formState.errors.name[0] : null}
                  color='#000'
                  className={classes.inputCont}
                />
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
            style={{width:'80%',  height: '41px', borderRadius: '2px', marginTop: theme.spacing(3)}}
            onClick={handleSignUp}
          >
            Create an account
          </FilledButton>
        </div>

        <DividerComponent />

        <SocialButtons>
              <SocialButton
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
           Already have an account?
         </Typography>
         <Link component={RouterLink} to="/login" className={classes.linkTwo} style={{textDecoration: 'none'}}>
           Log in
        </Link>
         </div>
         
        </form>
      </Paper>
    </main>
    </div>
    <FormFooter/>
    </DefaultOuterRootCont>
    </>
        )
}

const mapStateToProps = (state: RootState) => {
  return ({
    isSignedUp: state.signUp.isSignedUp,
    email: state.signUp.email,
  })
}

const mapDispatchToProps = (dispatch: any) => ({
  SignUpActions: bindActionCreators(signUpActions, dispatch),
})


export default Signup;