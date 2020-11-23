import * as React from 'react'

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

const FormFooter = () => {

  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <div>
        <Link component={RouterLink} to="/termsofservice">
          <Typography variant="body1" style={{color:'white', fontSize: '12px'}}>
                Terms of Service
          </Typography>
        </Link>
      </div>
      <div>
        <Link component={RouterLink} to="register">
        <Typography variant="body1" style={{color:'white', fontSize: '12px', marginLeft: theme.spacing(10)}}>
              Privacy
        </Typography>
        </Link>
      </div>
      <div>
        <Link component={RouterLink} to="register">
        <Typography variant="body1" style={{color:'white', fontSize: '12px', marginLeft: theme.spacing(10)}}>
              Contact us
        </Typography>
        </Link>
      </div>
    </div>
  )
}


export default FormFooter;