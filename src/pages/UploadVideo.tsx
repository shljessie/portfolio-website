import { Box, Button, Link, TextField, Typography, makeStyles, withStyles } from "@material-ui/core"
import { DefaultInnerRootCont, DefaultOuterRootCont }  from '../components/Containers'

import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import UserHeader from '../layout/UserHeader'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import styled from "styled-components"
import theme from "../theme"
import {useForm} from 'react-hook-form'

const ButtonCont = styled.div`
    display:'flex';
    align-items: 'center';
`

const UrlCont = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  innerRoot :{
    display:'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '55%',
    height: '30%'
  },
  formCont:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'-webkit-fill-available',
  },
  uploadbox: {
    margin: 'auto',
    justifyContent: 'center'
  },
  box:{
    width:'-webkit-fill-available',
    height: '400px',
    marginTop: '1%',
    border: '1px solid white',
    display:'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    display: 'none',
  },
  link: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: '#8687FF',
    textDecoration: 'none'
  },
  urlCont: {
    marginTop: theme.spacing(3),
    width:'-webkit-fill-available',
    color: 'white'
  },
  inputText:{
    color: "white"
  }
}))

const UploadVideo = () => {

  const { register, handleSubmit } = useForm()
   
  const onSubmit = (data: any) =>{
    console.log(data)
  }

  const classes = useStyles()
  return (
    <>
    <UserHeader />
    <DefaultOuterRootCont>
      <DefaultInnerRootCont className={classes.innerRoot}>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.formCont} style={{ marginTop: theme.spacing(18)}}>
      <Box color="white" className={classes.box}>
        <VideoCallIcon style={{ fontSize: "90" }} />
          <Typography variant="body1">
          Upload an audio or video file. <br/>
          Click to add media or drag and drop a file
          </Typography>
          {/* check console to see file type submitted */}
          <input
              ref= {register}
              // accept="video/*,audio/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              name="video" 
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span" style={{marginTop: theme.spacing(3), backgroundColor: '#8687FF'}}>
                Add media
              </Button>
            </label>
      </Box>
      <UrlCont
        className={classes.urlCont}
        label=""
        variant="outlined"
        id="custom-css-outlined-input"
        placeholder="Paste video or music URL (e.g. https://www.youtube.com/watch?v=oWhkL4899u8)"
        InputProps={{
          className: classes.inputText
        }}
      />
      <ButtonCont>
        <button 
          style={{
            width: '77px',
            height: '29px',
            display:'flex',
            alignItems: 'center',
            color: '#fff',
            border: `2px solid #8687FF`,
            borderRadius: '6px',
            padding: '10px',
            backgroundColor: '#8687FF',
            marginTop: theme.spacing(3)
          }}> 
          <Typography variant="button">Submit</Typography>
        </button>

      </ButtonCont>
      </form>
      <Link component={RouterLink} to="resetpassword" className={classes.link} style={{textDecoration:'none'}} > 
        Or Explore Tutorial
      </Link>
      </DefaultInnerRootCont>
    </DefaultOuterRootCont>
    </>
  )
}

export default UploadVideo;