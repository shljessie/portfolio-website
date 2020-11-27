import FilledButton from '../components/Buttons'
import { Link } from 'react-router-dom'
import React from "react"
import { Typography } from "@material-ui/core"
import theme from '../theme'

const SubscribeForm= () =>{
  return(
    <div  style={{ paddingBottom: theme.spacing(20)}}>
      <Link to="/Signup" style={{textDecoration: 'none'}}>
        <Typography variant = "subtitle2" style= {{color: 'white', marginBottom: theme.spacing(4)}}>Subscribe to our newsletter</Typography>
          <input type="e-mail" style={{width: '200px', height:'30px'}} placeholder="Email address" />
        <FilledButton style={{  width: "90px", height: '38px', marginLeft: '23px'}}>
          <Typography variant="button"> 
           Sign up
          </Typography>
        </FilledButton>
      </Link>
    </div>
  );
}

export default SubscribeForm;