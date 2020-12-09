import {
  Link,
  Paper,
  Typography,
  makeStyles
} from '@material-ui/core';

import { DefaultOuterRootCont } from '../components/Containers'
import FilledButton from '../components/Buttons'
import FormFooter from '../layout/FormFooter'
import FormHeader from '../layout/FormHeader';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
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
    flexDirection: 'column',
  },
  link: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3.5),
    marginRight: theme.spacing(1),
    color: '#8687FF',
    textDecoration: 'none'
  },
  resetButton:{
    display:'flex',
    flexDirection :'row',
    marginTop: theme.spacing(7),
    justifyContent:'space-between'
  }
}))


 const CheckEmail= ()=>{

    const classes = useStyles()
    
  return(
    <>
    <FormHeader/>
    <DefaultOuterRootCont>
    <div className={classes.root}>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <form className={classes.form}>
        <div className={classes.inputs}>
        <Typography variant= "h6" style={{ textAlign: 'start', marginBottom: theme.spacing(2), color:'white'}}> Check your email</Typography>
              <Typography variant="body1" style={{color:'white', fontSize: '15px', marginTop: theme.spacing(1.5), textAlign: 'start'}}>
              Reset link to hjkim@cochlear.ai. Didn’t receive it? You might have signed up with a different email address.
              </Typography>
        </div>
         
         <div className={classes.resetButton}>
          <Link component={RouterLink} to="/login" className={classes.link}> 
            Back to login page
          </Link>
          <FilledButton
            type="submit"
            fullWidth
            variant="contained"
            style={{width:'170px',  height: '41px', borderRadius: '0px'}}
          >
            Resend Email
          </FilledButton>
        </div>
        </form>
      </Paper>
      
      <img  src= { `https://picsum.photos/id/${3}/400/400`} alt='login_image' style={{height: '400px', marginLeft: theme.spacing(5)}}/>
    </main>
    </div>
    <FormFooter />
    </DefaultOuterRootCont>
    </>
        )
}

export default CheckEmail;