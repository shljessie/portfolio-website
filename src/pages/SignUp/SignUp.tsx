import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import validate from 'validate.js';
import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import {postSignUp, SignUpForm} from '../../shared/API';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import TermsOfServiceCard from './TermsOfServiceCard';
import {useGoogleAnalytics} from "../../hooks";
import {notify, NOTIFY_TYPE} from "../../constants";

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
    length: {
      minimum: 8,
      maximum: 128,
    },
  },
  confirm_password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
      maximum: 128,
    },
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
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
  },
  grid: {
    height: '100%',
    justifyContent: 'center',
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
    backgroundPosition: 'center',
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px',
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300,
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white,
  },
  bio: {
    color: theme.palette.white,
  },
  logoImage: {
    marginLeft: theme.spacing(4),
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    paddingTop: 115,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  title: {
    marginTop: theme.spacing(3),
  },
  socialButtons: {
    marginTop: theme.spacing(3),
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
  sugestion: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  textFieldLeftMargin: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  textFieldRightMargin: {
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  signInButton: {
    margin: theme.spacing(2, 0),
  },
  backButton: {
    color: '#546e7a',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface SignUpFormState {
  isValid: boolean;
  values: SignUpForm;
  touched: any;
  errors: any;
}

interface SnackBar {
  open: boolean;
  message: string;
  state: 'success' | 'info' | 'warning' | 'error' | undefined;
}

const SignUp = (props: any) => {
  const { history } = props;

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
  });
  const [snackBarOpen, setSnackBarOpen] = useState<SnackBar>({
    open: false,
    message: '',
    state: undefined,
  });
  const [isPending, setIsPending] = useState(false);
  const [expandedTerm1, setExpandedTerm1] = React.useState(false);
  const [expandedTerm2, setExpandedTerm2] = React.useState(false);


  const classes = useStyles();

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  const hasError = (field: any): boolean =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleChange = (event: any) => {
    event.persist();

    const target = event.target as HTMLInputElement;
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [target.name]:
          target.type === 'checkbox' ? target.checked : target.value,
      },
      touched: {
        ...formState.touched,
        [target.name]: true,
      },
    }));

    console.log(formState.values);
  };

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    if (!validateConfirmPassword()) return;
    setIsPending(true);
    try {
      const input = { ...formState.values, confirm_password: undefined }
      await postSignUp(input).then((resp) => {
        setSnackBarOpen({
          open: true,
          message:
            'Sign in success. Please check your mail to confirm email address. Site will be redirected to sign in in 8sec',
          state: 'success',
        });
        setIsPending(false);
        setTimeout(() => {
          history.push('/sign-in');
        }, 8000);
        useGoogleAnalytics.gaEvent('Sign Up', 'Create User', formState.values.email, 1)
      });
    } catch (e) {
      if (e.response.status === 409) {
        setSnackBarOpen({
          open: true,
          message: 'There is already a user with this E-mail address.',
          state: 'error',
        });
      }
      setIsPending(false);
    }
  };

  const handleClose = () => {
    setSnackBarOpen({ open: false, message: '', state: undefined });
    setIsPending(false);
  };

  const onExpandTerm1 = () => {
    setExpandedTerm1(!expandedTerm1)
  };

  const onExpandTerm2 = () => {
    setExpandedTerm2(!expandedTerm2)
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

  function notifySubmitFailure(msg: string) {
    setSnackBarOpen({
      open: true,
      message: msg,
      state: 'error'
    })
  }

    return (
    <div className={classes.root}>
      <Snackbar
        open={snackBarOpen.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackBarOpen.state}>
          {snackBarOpen.message}
        </Alert>
      </Snackbar>
      <Backdrop
        className={classes.backdrop}
        open={isPending}
        onClick={handleClose}
        addEndListener={undefined}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.contentBody}>
        <form className={classes.form} onSubmit={handleSignUp}>
          <Typography
            align="left"
            className={classes.title}
            color="textPrimary"
            variant="h2"
          >
            Sign Up
          </Typography>

          <Typography
            align="left"
            className={classes.sugestion}
            color="textSecondary"
            variant="body1"
          >
            Sign up with E-mail address
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
          <TextField
            className={classes.textField}
            error={hasError('confirm_password')}
            fullWidth
            helperText={
              hasError('confirm_password') ? formState.errors.confirm_password[0] : null
            }
            label="Confirm Password"
            name="confirm_password"
            onChange={handleChange}
            type="password"
            value={formState.values.confirm_password || ''}
            variant="outlined"
          />
          <Grid container>
            <Grid item xs={6} lg={6}>
              <TextField
                className={classes.textFieldRightMargin}
                error={hasError('firstname')}
                fullWidth
                helperText={
                  hasError('firstname')
                    ? formState.errors.firstname[0]
                    : null
                }
                label="First Name"
                name="firstname"
                onChange={handleChange}
                type="text"
                value={formState.values.firstname || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} lg={6}>
              <TextField
                className={classes.textFieldLeftMargin}
                error={hasError('lastname')}
                fullWidth
                helperText={
                  hasError('lastname')
                    ? formState.errors.lastname[0]
                    : null
                }
                label="Last Name"
                name="lastname"
                onChange={handleChange}
                type="text"
                value={formState.values.lastname || ''}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <TextField
            className={classes.textField}
            fullWidth
            label="Company"
            name="company"
            onChange={handleChange}
            type="text"
            value={formState.values.company || ''}
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Job Title"
            name="job_title"
            onChange={handleChange}
            type="text"
            value={formState.values.job_title || ''}
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                checked={formState.values.subscribe_mailinglist}
                name="subscribe_mailinglist"
              />
            }
            className={classes.textField}
            label="Subscribe Cochlear.ai News"
          />

          <TermsOfServiceCard
              isExpanded={expandedTerm1}
              isAgreed={formState.values.agree_term_1}
              handleChange={handleChange}
              handleExpandClick={onExpandTerm1}
              name={'agree_term_1'}
          />

          <TermsOfServiceCard
              isExpanded={expandedTerm2}
              isAgreed={formState.values.agree_term_2}
              handleChange={handleChange}
              handleExpandClick={onExpandTerm2}
              name={'agree_term_2'}
          />

          <Button
            className={classes.signInButton}
            color="primary"
            disabled={!formState.isValid || !formState.values.agree_term_1 || !formState.values.agree_term_2}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
