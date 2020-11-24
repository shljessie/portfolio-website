import { DefaultInnerRootCont, DefaultOuterRootCont }  from '../components/Containers'
import { Divider, Typography, makeStyles } from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FilledButton from '../components/Buttons'
import Layout from "../components/layout"
import React from "react"
import UserHeader from '../layout/UserHeader'
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  innerRoot :{
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  accountCont :{
    display:'flex',
    alignItems: 'start',
    flexDirection: 'column',
    color: 'white',
  },
  info:{
    display: 'flex',
    flexDirection: 'row'
  },
  userinfo:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    width: '40vw',
    marginTop: theme.spacing(6)
  },
  signOutButton:{
    width: '120px',
    marginTop: theme.spacing(10),
    backgroundColor: 'gray',
    border: 'none',
    '&:hover': {
      boxShadow: `0 0 14px gray`,
      backgroundColor: 'gray',
    },
  },
  subCont:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    marginTop: theme.spacing(6),
  },
  buttonCont:{
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-end'
  },
  deleteButton:{
    backgroundColor: 'red',
    border: 'none',
    width: '120px',
    '&:hover': {
      boxShadow: `0 0 14px red`,
      backgroundColor: 'red',
    },
  }
  
}))

const PageTemplate = () => {

  const classes = useStyles()

  return (
    <Layout>
      <UserHeader />
      <DefaultOuterRootCont>
        <DefaultInnerRootCont className={classes.innerRoot}>
          <div className={classes.accountCont}>
          <Typography variant= "h4"style={{ }}>My Account</Typography>

          <div className= {classes.info}>
            <AccountCircleIcon style={{fontSize: '100', margin: theme.spacing(3)}} />
            <div className= {classes.userinfo}>
            <Typography variant= "h6" >Jessie Lee</Typography>
            <Typography variant= "subtitle2">sl994@gmail.com</Typography>
            </div>
            <FilledButton  className={classes.signOutButton}><Typography variant="button">Sign Out</Typography></FilledButton>
          </div>
          <Divider style={{ width:"100%", backgroundColor: 'gray', marginTop: theme.spacing(1.5)}}></Divider>
          <div className= {classes.subCont}>
            <Typography variant= "body1">BILLING HISTORY</Typography>
            <Typography variant= "body2">No payments to show. If you upgrade a workspace or pay Music Swapper in the future, your transaction history will show up here. </Typography>
          </div>
          <div className= {classes.subCont}>
            <Typography variant= "body1">DELETE ACCOUNT</Typography>
            <Typography variant= "body2">This will delete your Music Swapper account and everything associated with it.</Typography>
          </div>
          <div className={classes.buttonCont}>
          <FilledButton className={classes.deleteButton}><Typography variant="button">Delete</Typography></FilledButton>
          </div>
          </div>
        </DefaultInnerRootCont>
      </DefaultOuterRootCont>
    </Layout>
  )
}


export default PageTemplate
