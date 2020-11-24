import { Box, Button, Link, TextField, Typography, makeStyles, withStyles } from "@material-ui/core"
import { DefaultInnerRootCont, DefaultOuterRootCont }  from '../components/Containers'

import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import UserHeader from '../layout/UserHeader'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import theme from "../theme"

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
    flexDirection: 'column'
  },
  uploadbox: {
    margin: 'auto',
    justifyContent: 'center'
  },
  box:{
    width: '700px',
    height: '400px',
    marginTop: '10%',
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
    margin: theme.spacing(3),
    width: '700px',
    color: 'white'
  },
  inputText:{
    color: "white"
  }
}))

const UploadVideo = () => {

  const handleChange = (event: any) => {
    
  }

  const classes = useStyles()
  return (
    <>
    <UserHeader />
    <DefaultOuterRootCont>
      <DefaultInnerRootCont className={classes.innerRoot}>
      <Box color="white" className={classes.box}>
        <VideoCallIcon style={{ fontSize: "90" }} />
          <Typography variant="body1">
          Upload an audio or video file. <br/>
          Click to add media or drag and drop a file
          </Typography>
          <input
              accept="video/*,audio/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span" style={{marginTop: theme.spacing(3)}}>
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
      <Link component={RouterLink} to="resetpassword" className={classes.link}> 
        Or Explore Tutorial
      </Link>
      </DefaultInnerRootCont>
    </DefaultOuterRootCont>
    </>
  )
}

export default UploadVideo;