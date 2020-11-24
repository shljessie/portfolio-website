import { DefaultInnerRootCont, DefaultOuterRootCont }  from '../components/Containers'
import { LayoutRootCont, PageTitleCont } from "../components/Containers"

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import FilledButton from '../components/Buttons'
import Layout from "../components/layout"
import { LongDividerComponent } from '../layout/Divider'
import React from "react"
import Typography from '@material-ui/core/Typography';
import UserHeader from '../layout/UserHeader'
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  accountCont :{
    display:'flex',
    alignItems: 'start',
    flexDirection: 'column',
    color: 'white',
  },
  innerRoot :{
    display:'flex',
    flexDirection: 'column',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info:{
    display: 'flex',
    flexDirection: 'row'
  },
  userinfo:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    width: '35vw',
    marginTop: theme.spacing(6)
  },
  signOutButton:{
    backgroundColor: 'gray',
    border: 'none',
    width: '120px',
    marginTop: theme.spacing(10)
  },
  subCont:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    marginTop: theme.spacing(6),
  },
  deleteButton:{
    backgroundColor: 'red',
    border: 'none',
    width: '120px',
    marginLeft: '46vw'
  }
  
}))

const PageTemplate = (props: Props) => {
  const {} = props

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
          <Divider style={{ width:"780px ", backgroundColor: 'gray', marginTop: theme.spacing(1.5)}}></Divider>
          <div className= {classes.subCont}>
            <Typography variant= "body1">BILLING HISTORY</Typography>
            <Typography variant= "body2">No payments to show. If you upgrade a workspace or pay Music Swapper in the future, your transaction history will show up here. </Typography>
          </div>
          <div className= {classes.subCont}>
            <Typography variant= "body1">DELETE ACCOUNT</Typography>
            <Typography variant= "body2">This will delete your Music Swapper account and everything associated with it.</Typography>
          </div>
          <FilledButton className={classes.deleteButton}><Typography variant="button">Delete</Typography></FilledButton>
          </div>
        </DefaultInnerRootCont>
      </DefaultOuterRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
