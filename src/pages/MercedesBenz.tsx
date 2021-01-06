import { DarkOuterRootCont, DefaultInnerRootCont, DefaultOuterRootCont, LayoutRootCont, PageTitleCont } from "../components/Containers"

import Footer from '../layout/Footer'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import Header from "../layout/Header"
import Layout from "../components/layout"
import React from "react"
import { Typography } from "@material-ui/core"
import { VerticalDelimiter } from "../components/Delimiters"
import architecture from '../images/architecture.png'
import { makeStyles } from "@material-ui/core/styles"
import structure from '../images/cochl.structure.png'
import theme from "../theme"
import useCases from '../images/benzUseCases.png'

const useStyles = makeStyles(theme => ({
  root: {	
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
    height: '560px',	
    width: '90%',
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
  }
}))

const PageTemplate = (props: Props) => {
  const {} = props
  const classes = useStyles()

  return (
    <Layout>
      <LayoutRootCont>
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

    <DefaultOuterRootCont style={{color: 'white'}}>
          <DefaultInnerRootCont className={classes.headerCont} style={{textAlign: 'start'}}>
            <Typography variant='subtitle1'>	
              Sound Recognition AI in Mercedes Benz
            </Typography>	
            <br/>
            <Typography variant='body1'>
            Daimler and Merecedes Benz partenered with Cochl. AI to add Cochl.'s Sound Recognition AI to Mercedes-Benz.
            Cochl. worked with Mercedes Benz's UX team to design a complete user experience of in-Car sound recognition.
            With this technology, we can detect car machine errors, control cars with sounds, examine the conditions of the users in the car, 
            play games in the car, and detect personalized secret languages to ensure safety or conduct commands.
            </Typography>
            <br/>
            <br/>
            <Typography variant='body1'>
            My job here was to create a full version demo of integrated with the Cochl. Sound Recognition AI. Cochl.'s' Dev team,
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
            <Typography variant='body1'>
            The above is a list of the desired uses of Cochl.'s Sound Recognition Serivce into Mercedes Benz. The uses span from
            car function controls to enterntainment within the Car. As you can see, there are various use cases that we planned to add
            to Mercedes Benz. There are a number of fun use cases such as the 'Harmonization' service that recognizes the sound of people 
            singing in a car and sings along with the user.
            <br/>
            <br/>
            <video width="750" height="440" controls>
                <source src="./images/Haromization.mp4" type="video/mp4"/>
              Demo of Harmonization Testing
            </video>
            <br/>
            <br/>
            </Typography>
            <img  className={classes.image} src={architecture}></img>
            <br/>
            <br/>
            <br/>
            <br/>
            <Typography variant='body1'>
            The above is an image of the software architecture structure. The SDK reads in any sound signals it recieves from the environment and 
            For our AU computing device, we used NVIDIA Jetson TX2. 
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
