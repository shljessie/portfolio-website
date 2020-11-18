import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import {postSignUp, SignUpForm} from "../../../shared/API";
import validate from "validate.js";
import {useGoogleAnalytics} from "../../../hooks";
import {InputCont} from "./InputCont";
import {TermsDialog} from "./TermsDialog";
import FilledButton from "../../../components/Buttons/RoundButton";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {signUpActions} from "../../../store/modules/signUpStateManager";
import {RootState} from "../../../store/modules";
import {notify, NOTIFY_TYPE} from "../../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: '330px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '7px'
    },
    [theme.breakpoints.up('sm')]: {
      // height: '500px',
    },
  },
  formCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  rowCont: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '160px',
    [theme.breakpoints.up(440)]: {
      flexWrap: 'unset',
      minHeight: '80px',
    },
  },
  inputCont: {
    padding: theme.spacing(2, 1, 0),
    minHeight: '80px',
    minWidth: '200px'
  },
  inputLabel: {
    fontSize: '14px'
  },
  input: {
    paddingTop: theme.spacing(1.5),
  },
  buttonCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(3, 0),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(5, 0),
    },
  },
  inputIcon: {
    height: '26px',
  },
  checkBoxCont: {
    margin: theme.spacing(0),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '14px',
    minHeight: '42px'
  },
  termText: {
    color: '#33A9F4',
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  optionalText: {
    fontSize: '12px',
    fontStyle: 'italic',
    display: 'inline-block',
    marginLeft: theme.spacing(0.5)
  }
}))

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  confirm_password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
      maximum: 128,
    },
    equality: "password"
  },
  firstname: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64,
    },
  },
  lastname: {
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

const PageComp = (props: Props) => {
  const classes = useStyles();

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
  const [isTermDialogOpen, setIsTermDialogOpen] = useState(false)
  const [isPolicyDialogOpen, setIsPolicyDialogOpen] = useState(false)

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

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
        // setTimeout(() => {
        //   history.push('/sign-in')
        // }, 8000);
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

    // https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/
    // Following the newest password guideline
    // if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,128}$/)) {
    //   notify('Password must be 8 to 128 characters long and contain at least one lowercase letter, ' +
    //     'one uppercase letter, one numeric digit, and one special character', NOTIFY_TYPE.ERROR)
    //   return false
    // }

    return true
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSignUp}>
        <div className={classes.formCont}>
          <TermsDialog
            isOpen={isTermDialogOpen}
            onClose={() => setIsTermDialogOpen(false)}
            onSubmit={setFormStateInput}
            titleText={'Terms And Conditions'}
            inputName='agree_term_1'
          />

          <TermsDialog
            isOpen={isPolicyDialogOpen}
            onClose={() => setIsPolicyDialogOpen(false)}
            onSubmit={setFormStateInput}
            titleText={'Privacy Policy'}
            inputName='agree_term_2'
          />

          {/*<TextField*/}
          {/*  label='EMAIL'*/}
          {/*  name='email'*/}
          {/*  value={formState.values.email}*/}
          {/*  // handleChange={handleChange}*/}
          {/*  type='email'*/}
          {/*  // isError={hasError('email')}*/}
          {/*  helperText={hasError('email') ? formState.errors.email[0] : null}*/}
          {/*  // className={classes.inputCont}*/}
          {/*  autoFocus*/}
          {/*  size={'small'}*/}
          {/*  variant='outlined'*/}
          {/*  fullWidth*/}
          {/*  onChange={handleChange}*/}
          {/*  className={classes.input}*/}
          {/*  InputProps={*/}
          {/*    {*/}
          {/*      startAdornment: (*/}
          {/*        <InputAdornment position="start">*/}
          {/*          A*/}
          {/*        </InputAdornment>*/}
          {/*      )*/}
          {/*    }*/}
          {/*  }*/}
          {/*>*/}
          {/*</TextField>*/}

          <InputCont
            label='EMAIL'
            name='email'
            value={formState.values.email}
            handleChange={handleChange}
            type='email'
            isError={hasError('email')}
            helperText={hasError('email') ? formState.errors.email[0] : null}
            color='#000'
            className={classes.inputCont}
            disableAutofill={true}
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
            disableAutofill={true}
          />

          <InputCont
            label='CONFIRM PASSWORD'
            name='confirm_password'
            value={formState.values.confirm_password as string}
            handleChange={handleChange}
            type='password'
            isError={hasError('confirm_password')}
            helperText={hasError('confirm_password') ? formState.errors.confirm_password[0] : null}
            color='#000'
            className={classes.inputCont}
            disableAutofill={true}
          />

          <div className={classes.rowCont}>
            <InputCont
              label='FIRST NAME'
              name='firstname'
              value={formState.values.firstname}
              handleChange={handleChange}
              isError={hasError('firstname')}
              helperText={hasError('firstname') ? formState.errors.firstname[0] : null}
              color='#000'
              className={classes.inputCont}
            />

            <InputCont
              label='LAST NAME'
              name='lastname'
              value={formState.values.lastname}
              handleChange={handleChange}
              isError={hasError('lastname')}
              helperText={hasError('lastname') ? formState.errors.lastname[0] : null}
              color='#000'
              className={classes.inputCont}
            />
          </div>

          <InputCont
            label='COMPANY'
            name='company'
            value={formState.values.company as string}
            handleChange={handleChange}
            color='#000'
            className={classes.inputCont}
            isOptional={true}
          />

          <InputCont
            label='JOB TITLE'
            name='job_title'
            value={formState.values.job_title as string}
            handleChange={handleChange}
            color='#000'
            className={classes.inputCont}
            isOptional={true}
          />

          <FormControlLabel
            control={<Checkbox onChange={handleChange}
                               checked={formState.values.subscribe_mailinglist}
                               name="subscribe_mailinglist"/>}
            className={classes.checkBoxCont}
            label={<div>Subscribe Cochlear.ai News</div> } // <div className={classes.optionalText}>(optional)</div>
            style={{marginTop: '16px'}}
          />

          <div className={classes.checkBoxCont}>
            <Checkbox onChange={handleChange}
                      checked={formState.values.agree_term_1}
                      name="agree_term_1"
                      disabled={true}
            />
            <div className={classes.termText} onClick={() => setIsTermDialogOpen(true)}>I agree to the Terms and Conditions</div>
          </div>

          <div className={classes.checkBoxCont}>
            <Checkbox onChange={handleChange}
                      checked={formState.values.agree_term_2}
                      name="agree_term_2"
                      disabled={true}
            />
            <div className={classes.termText} onClick={() => setIsPolicyDialogOpen(true)}>I agree to the Privacy Policy</div>
          </div>
        </div>

        <div className={classes.buttonCont}>
          <FilledButton
            onClick={handleSignUp}
            fullWidth={false}
            style={{padding: '10px 60px'}}
            disabled={!formState.isValid || !formState.values.agree_term_1 || !formState.values.agree_term_2}
            type="submit"
          >
            CREATE ACCOUNT
          </FilledButton>
        </div>
      </form>
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComp)