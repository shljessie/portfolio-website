import { Button, OutlinedInput } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import FilledButton from '../components/Buttons'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import TopSection from '../components/TopSection';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles"
import styled from 'styled-components';
import theme from '../theme';

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
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
    marginLeft: theme.spacing(3.5)
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


 const Login = ()=>{

    const classes = useStyles()
    
  return(
    <>
    <TopSection/>
    <div className={classes.root}>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <form className={classes.form}>
        <div className={classes.inputs}>
        <Typography variant= "h6" style={{ textAlign: 'start', marginBottom: theme.spacing(2), color:'white'}}> Log in </Typography>
              <InputLabel htmlFor="input-with-icon-adornment"className={classes.inputLabel}>
                <Typography variant="body2" style={{fontSize: '10px', color:'white'}}>EMAIL</Typography>
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon style={{color:'#FFFFFF'}}/>
                  </InputAdornment>
                }
                style={{marginBottom: theme.spacing(3), marginTop:theme.spacing(1), width: '340px'}}
              />
                <InputLabel htmlFor="input-with-icon-adornment" className={classes.inputLabel}>
                <Typography variant="body2" style={{fontSize: '10px', color:'white'}}>PASSWORD</Typography>
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon style={{color:'#FFFFFF'}}/>
                    </InputAdornment>
                  }
                  style={{marginBottom: theme.spacing(3), marginTop:theme.spacing(1), width: '340px'}}
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

        <div style={{display: 'flex', flexDirection: 'row', marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
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
                startIcon={<img width="22" height="22" src={"/"} />}
                style={{ backgroundColor: '#000' }}
              >
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
      <img  src= { `https://picsum.photos/id/${3}/400/400`} alt='login_image' style={{height: '400px', marginLeft: theme.spacing(5)}}/>
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
export default Login;