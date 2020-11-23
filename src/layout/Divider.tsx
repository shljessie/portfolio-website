import * as React from 'react'

import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'
import { Typography } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  footer:{
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    top: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
}))

const DividerComponent = () => {

  const classes = useStyles()

  return (
    <div style={{display: 'flex', flexDirection: 'row', marginTop: theme.spacing(2) }}>
    <Divider style={{width: '40%', backgroundColor: 'gray', marginTop: theme.spacing(1.5), marginRight: theme.spacing(1.5),marginLeft: theme.spacing(1.5)}}></Divider>
      <Typography variant="body2" style={{color: 'gray'}}>Or</Typography>
    <Divider style={{width: '40%', backgroundColor: 'gray', marginTop: theme.spacing(1.5), marginRight: theme.spacing(1.5), marginLeft: theme.spacing(1.5)}}></Divider>
    </div>
  )
}


export default DividerComponent;