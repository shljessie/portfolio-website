import { DarkOuterRootCont, DefaultInnerRootCont, DefaultOuterRootCont, LayoutRootCont } from "../components/Containers"
import React , { useContext } from "react"

import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import Header from "../layout/Header"
import Layout from "../components/layout"
import ReactPlayer from 'react-player'
import { ThemeContext } from "../context/ThemeContext"
import { Typography } from "@material-ui/core"
import { VerticalDelimiter } from "../components/Delimiters"
import architecture from '../images/architecture.png'
import { makeStyles } from "@material-ui/core/styles"
import structure from '../images/cochl.structure.png'
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
      <LayoutRootCont style={{backgroundColor: 'white', height: '600vh'}}>
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
                 Mercedes Benz Sound Recognition AI
                </Typography>	
          </div>	
        </DefaultInnerRootCont>
      </DarkOuterRootCont>
        <img src="https://cdn-images-1.medium.com/max/800/1*3nnrdgb8xkiLPQFd0vV7aQ.gif" alt='news_main_image' className={classes.headerImage}/>	

    <DefaultOuterRootCont style={{color: 'black'}}>
          <DefaultInnerRootCont className={classes.headerCont} style={{textAlign: 'start'}}>
            <Typography variant='h5'>	
              Sound Recognition AI in Mercedes Benz
            </Typography>	
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            During my Internship at Cochl. , I created a live demo of Cochl's Sound Recognition AI implemented in
            Mercedes Benz user display.
            {/* show full demo image here */}
            <br/>
            Daimler and Merecedes Benz partenered with Cochl. AI to add Cochl.'s Sound Recognition AI to Mercedes-Benz.
            Cochl. worked with Mercedes Benz's UX team to design a complete user experience of in-Car sound recognition.
            With this technology, we can detect car machine errors, control cars with sounds, examine the conditions of the users in the car, 
            play games in the car, and detect personalized secret languages to ensure safety or conduct commands.
            </Typography>
            <br/>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            My job here was to create a full demo of Mercedes Benz cockpit integrated with the Cochl. Sound Recognition AI. Cochl.'s' Dev team,
            along with the UX team designed the Mercedes Benz Cockpit display according the MBUX design guidelines. There were many factors 
            to consider such as when an action should be triggered and when to display to the user that the machine has understood what the
            user has done. After the design process I worked on visualizing the design with Front-End Software Development and then moved 
            onto integrating the software with the Backend SDK with the Dev Team. This whole process took about a month and it was an exciting
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
            car function controls to enterntainment within the Car. There are a number of fun use cases such as the 'Harmonization' service that recognizes the sound of people 
            singing in a car and sings along with the user. 
            <br/>
            Below is a demo of testing out the Harmonization effect.
            <br/>
            <br/>
            <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
              <ReactPlayer url='benz.mp4' controls = {true} style={{outline: 'none',}}/>
              Testing the Harmonization effect on our backend
            </div>
            <br/>
            <br/>
            <br/>
            </Typography>
            <img  className={classes.image} src={architecture}></img>
            <br/>
            <br/>
            <br/>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            The software architecture structure is structured as above.
            For our AI computing device, we used NVIDIA Jetson TX2. 
            <br/>
            First, when the user selects what sort of sound mode they will be using. Once it is selected, 
            the web display sends a signal to the web server to turn on the according mode. The web server then signals the SDK to set the according mode.
            This mode can be any mode like the Harmonization Mode, or the Secret Language Setting Mode. 
            </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <img  className={classes.image} src={structure}></img>
            <br/>
            <br/>
            <br/>
            <br/>
          </DefaultInnerRootCont>
        </DefaultOuterRootCont>
      </LayoutRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
