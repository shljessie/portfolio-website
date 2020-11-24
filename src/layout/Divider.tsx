import * as React from 'react'

import { Divider, Typography, makeStyles } from "@material-ui/core"

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

export const DividerComponent = () => {

  const classes = useStyles()

  return (
    <div style={{display: 'flex', flexDirection: 'row', marginTop: theme.spacing(2) }}>
    <Divider style={{width: '40%', backgroundColor: 'gray', marginTop: theme.spacing(1.5), marginRight: theme.spacing(1.5),marginLeft: theme.spacing(1.5)}}></Divider>
      <Typography variant="body2" style={{color: 'gray'}}>Or</Typography>
    <Divider style={{width: '40%', backgroundColor: 'gray', marginTop: theme.spacing(1.5), marginRight: theme.spacing(1.5), marginLeft: theme.spacing(1.5)}}></Divider>
    </div>
  )
}


