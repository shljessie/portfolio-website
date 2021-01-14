import { DarkOuterRootCont, DefaultInnerRootCont, DefaultOuterRootCont, LayoutRootCont } from "../components/Containers"
import React , { useContext } from "react"

import FilledButton from '../components/Buttons'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import Header from "../layout/Header"
import Layout from "../components/layout"
import { Link as PageLink } from "react-router-dom";
import ReactPlayer from 'react-player'
import { ThemeContext } from "../context/ThemeContext"
import { Typography } from "@material-ui/core"
import { VerticalDelimiter } from "../components/Delimiters"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"
import useCases from '../images/benzUseCases.png'

const useStyles = makeStyles(theme => ({
  root: {	
    backgroundColor:'white'
  },
  innerRoot: {
  },	
  header: {	
    paddingTop: HEADER_HEIGHT,	
    paddingBottom: '100px'	
  },	
  headerSubtitle: {	
    marginTop: theme.spacing(4),	
    display: 'flex',	
    alignItems: 'start',	
  },	
  headerImage: {	
    display: 'block',	
    height: '460px',	
    width: '65%',
    margin: '-90px auto 0',	
    maxWidth: '1150px',	
  },	
  headerCont: {
    padding: theme.spacing(4, 0, 6),	
    maxWidth: '950px',	
    margin: '0 auto',	
    [theme.breakpoints.down('md')]: {	
      padding: theme.spacing(2, 0),	
    }		
  },
  image:{
    maxWidth: '950px',	
  },
  video:{
    outline: 'none',
    alignItems: 'center',
  }
}))

const PageTemplate = (props: Props) => {
  const {} = props
  const classes = useStyles()
  const { setHeaderTheme } = useContext(ThemeContext);	

  return (
    <Layout>
      <LayoutRootCont style={{backgroundColor: 'white', height: '800vh'}}>
      <Header />
      <DarkOuterRootCont className={classes.header}>
        <DefaultInnerRootCont style={{display: 'flex'}} className={classes.innerRoot}>
          <div className={classes.headerCont}>	
                <Typography variant='body2'>	
                  <div className={classes.headerSubtitle}>	
                    <div>Mercedes Benz</div>	
                    <VerticalDelimiter length='24px' thickness='2px' color='#fff'/>	
                    <div>2020.12.01 ~ 2021.01.15</div>	
                  </div>	
                </Typography>	
                <Typography	
                  variant='h3'	
                  style={{marginTop: theme.spacing(1), fontWeight: 'bold',fontFamily: 'Lato', textAlign: 'start'}}	
                >	
                 Mercedes Benz : Sound Recognition AI device in Smart Car
                </Typography>	
          </div>	
        </DefaultInnerRootCont>
      </DarkOuterRootCont>
        <img src="benzMain.png" alt='news_main_image' className={classes.headerImage}/>	

    <DefaultOuterRootCont style={{color: 'black'}}>
          <DefaultInnerRootCont className={classes.headerCont} style={{textAlign: 'start'}}>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            During my Internship as a Software Enginner at Cochl, I created a live demo of Cochl's Sound Recognition AI implemented in
            Mercedes Benz user display. 
            </Typography>
            <br/>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            As a Software Engineer, I created a full demo of the Mercedes Benz cockpit integrated with Cochl. Sound Recognition AI. 
            As the only front-end engineer on our team, I worked on both Front-End and Back-End Integration.
            <br/>
            <br/>
            I created the user display for Mercedes Benz cockpit and integrated the frontend with the backend webserver. 
            Messages recieved from the backend SDK would be caught by the webserver and passed onto the frontend to display changes
            or notify the user. This whole process took about a month and it was an exciting
            experience for me to create user interaction with AI devices on a smart car display.
            </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <img  className={classes.image} src={useCases}></img>
            <br/>
            <br/>
            <br/>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            The above is a list of the uses of Cochl.'s Sound Recognition Serivce into Mercedes Benz. The uses span from
            car function controls to enterntainment within the Car. 
            Among these use cases, five were chosen with the MBUX Daimler Team to create a demo display.
            </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Typography variant='h5'>
              Use Cases Demo
            </Typography>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            <ul>
              <li> Whistle: Whistle sound from user triggers car action such as opening/closing window. 3 features(hight-low pitch), (low-high pitch), (no change pitch) </li>
              <br/>
                  <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                  <img src="https://cdn-images-1.medium.com/max/800/1*3nnrdgb8xkiLPQFd0vV7aQ.gif" alt='news_main_image'/>	
                  Mercedes Benz UX Team testing out the whistle feature implemented in the car.
                  </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <li> Sing Along: Harmonization with the user as the user sings a song, the Car sings along.</li>
              <br/>
                  <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                    <ReactPlayer url='benz.mp4' controls = {true} style={{outline: 'none',}}/>
                    Testing the Harmonization effect on our backend
                  </div>
              <br/>
              <br/>
              <br/>
              <br/>
                  <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                    <ReactPlayer url='harmon.mov' controls = {true} style={{outline: 'none',}}/>
                    Demo of the Harmonization Feature
                  </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <li> AudioBook: Child Entertainment for car rides, make an animal sound to move on to next parts of the audio book</li>
              <br/>
                  <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                    <ReactPlayer url='audiobook.mov' controls = {true} style={{outline: 'none',}}/>
                    Demo of the Audiobook Feature
                  </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <li> Entertainment Game: Make the correct sound to win in a game!</li>
              <br/>
                  <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                    <ReactPlayer url='animalgame.mov' controls = {true} style={{outline: 'none',}}/>
                    Demo of the Entertainment Game Feature
                  </div>
                <br/>
              <li> Secret Language: Encode your own secret language that only you and the car can understand</li>
              <br/>
                 <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                    <ReactPlayer url='secretL.mov' controls = {true} style={{outline: 'none',}}/>
                    Demo of the Secret Language Feature
                  </div>
              <br/>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            These were the features that I made for Sound Recognition AI user display.
            For the code, I used javascript with animations and socket.io and docker
            to listen to messages being sent from the webserver. Due to company privacy issues,
            I cannot open the full code. But if you have more inquiries on this project, please
            feel free to contact me anytime at <Typography variant="body1"><a href="mailto: sl994@cornell.edu" style={{textDecoration: 'none', display: 'flex'}}>sl994@cornell.edu</a>
            </Typography> Thank you!
            </Typography>
            <br/>
            <br/>
            </Typography>
            <br/>
            <br/>
              <FilledButton style={{ marginLeft: 'auto', marginRight: 'auto', width:'153px',  height: '41px', fontWeight: '800'}}  href="/">
                 <Typography variant="body1"> Back to Home </Typography>
              </FilledButton>
          </DefaultInnerRootCont>
        </DefaultOuterRootCont>
      </LayoutRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
