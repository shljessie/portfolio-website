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
      <LayoutRootCont style={{backgroundColor: 'white', height: '650vh'}}>
      <Header />
      <DarkOuterRootCont className={classes.header}>
        <DefaultInnerRootCont style={{display: 'flex'}} className={classes.innerRoot}>
          <div className={classes.headerCont}>	
                <Typography variant='body2'>	
                  <div className={classes.headerSubtitle}>	
                    <div>Cochl Internship</div>	
                    <VerticalDelimiter length='24px' thickness='2px' color='#fff'/>	
                    <div>2020.11.11 ~ 2021.01.22</div>	
                  </div>	
                </Typography>	
                <Typography	
                  variant='h3'	
                  style={{marginTop: theme.spacing(1), fontWeight: 'bold',fontFamily: 'Lato', textAlign: 'start'}}	
                >	
                 Cochl Internship : SoundRecognition AI , GraphQL and Data Visualization
                </Typography>	
          </div>	
        </DefaultInnerRootCont>
      </DarkOuterRootCont>
      {	
        <img src="https://cdn-images-1.medium.com/max/1600/1*gAIZ4bHnEw9xyx8fU7xOtg.gif" alt='news_main_image' className={classes.headerImage}/>	
      }	
    <DefaultOuterRootCont style={{color: 'black'}}>
          <DefaultInnerRootCont className={classes.headerCont} style={{textAlign: 'start'}}>
            <br/> 
            <Typography variant='h6'>	
              My Overall Internship Experience
            </Typography>	
            <br/> 
            <br/> 
            <Typography variant='body1' style={{fontSize: '19px'}}>
            <a href="https://www.cochl.ai/"> Cochl. </a>is a machine learning sound recognition AI company that specializes non-verbal sound recognition. 
          I chose to work here because my main interests lied in studying interactive experiences with machine learning. 
          <br/> 
          <br/> 
          One of Cochl.’s main products was Cochl. Sense, an AI technology that recognized non-verbal sounds around our environment such as coughs, window breaking, machine errors ..etc. 
          to prevent danger situations, analyze the health conditions of people , and prevent machine accidents in advance.
          During my time here I was able to see how machine learning technology was used in today's industry, how much in demand they were at the moment, and 
          usage ethics that were being overlooked by the industry.
          <br/> 
          <br/> 
          Our company was a B2B company, selling our products to other companies that were interested in using our products. 
          We worked with a wide range of companies ranging from, Music Companies(SKT Flow), Mercedes Benz, Furniture Companies, Philips Home ... etc.
          While I mostly worked on software engineering, finessing our products and enhancing the software, I was able to 
          see that many industries were interested in including machine learning technology in their products to make them more 'smart'. 
          Here are a few bullet points of the main things I learned during my time at Cochl.
          <br/>
          <br/> 
          Some of the areas in where companies wanted to implement machine learning technology was quite concerning to such as a 
          'bathroom sound recognition'. In many areas in today's machine learning industry technology was spreading at a rapid pace and legal
          measures that prohibited the infringment of rights of users were not being placed at a matching pace.
          I was also able to experience how machine learning products needed constant progress towards advancement in technology. 
          We needed to always check the performance of our products, see what areas they were performing well and what needed improvement.
          This brought me to thinking that data visualization software for machine learning researchers to check the performance of their models 
          was also an in demand need.
            </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <Typography variant='h6'>	
            Work
            </Typography>	
            <br/>
            <br/>

            <Typography variant='body1'  style={{fontSize: '19px'}}>	
            <Typography variant='h6'>	
            1. Cochl Website : GraphQl, React, Gatsby, Typescript, Webscraping API
            </Typography>	

            <br/>
            <br/>
            I worked on Creating the <a href="https://www.beta.cochl.ai/newsroom/">Newsroom for Cochl.'s main website. </a> 
            Cochl's main website was made using React and Gatsby. Gatsby uses 
            React-Router for its linking system. However, when going through multiple links, (clicking a link to load page and clicking a link again from there
            to load the same page with different data) would throw an error.
            This was because the props passed through the location data  using react-router can only be used once. 
            So to load data, the optimal way to do this
            is to use Gatsby with GraphQL. I used GraphQL with gastby to grab the data from markdown files and then 
            style the news article accoding to the design.
            from the newsroom pages and add data to the page templates. With this, the news articles were rendered. 
            I worked with GrapQL, to query the data we wanted. 
            I also used React metascraper to scrape data for the Press articles of Cochl.
            <br/>
            <br/>
            <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
              <ReactPlayer url='newsroom.mov' controls = {true} style={{outline: 'none',}}/>
              Newsroom for Cochl.'s website
            </div>
            You can find the link to the page I made <a href="https://www.beta.cochl.ai/newsroom/">here.</a>
            <br/>
            <br/>
            Since I wanted to do more data visualization, I decided to make a data visualization component for Cochl.'s website
            to explain to our users of how the process for Cochl's AI works and how the sound classification preforms.
            So for Cochl's website, I created a 3D canvas component that recognizes sounds and a 3D visualization that explaines the classification process of 
            our machine learning service.
            I created this 3D visualization element by adding a canvas section to the website. Though this visualization is not in production yet 
            due to heavy weight issues, it was an unique experince for me to work with real data and create visualizations on it.
            <br/>
            <br/>
            <div style={{display:'flex',flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
              <ReactPlayer url='dataviz.mov' controls = {true} style={{outline: 'none',}}/>
              Datavisualization for Cochl. website
            </div>
            <br/>
            <br/>
            2. Mercedes Benz 
            <br/>
            <br/>
            <img src="https://cdn-images-1.medium.com/max/800/1*3nnrdgb8xkiLPQFd0vV7aQ.gif" style={{width: '100%', height: '390px'}}></img>
            <br/>
            <br/>
            <br/>
            I created a full demo of the Mercedes Benz cockpit integrated with Cochl. Sound Recognition AI. 
            As the only front-end engineer on our team, I worked on both Front-End and Back-End Integration.
            I created the user display for Mercedes Benz cockpit and integrated the frontend with the backend webserver. 
            Messages recieved from the backend SDK would be caught by the webserver and passed onto the frontend to display changes
            or notify the user. This whole process took about a month and it was an exciting
            experience for me to create user interaction with AI devices on a smart car display.
            Implementing Sound Recognition AI into Mercedes Benz.You can read more about it <a href="/MercedesBenz">here</a>.
            <br/>
            <br/>
            <br/>
            <br/>

            3. Music Swapper : React, Typescript,Material UI
            <br/>
            <br/>
            <img src="https://cdn-images-1.medium.com/max/1600/1*gZd98LBsHirc0pFf3H4ygw.gif" style={{width: '100%', height: '100%'}}></img>
            <br/>
            <br/>
            <br/>
            Using Cochl. Sense’s product, one B2C product I worked on was ‘Music Swapper’.
            Music Swapper is an application that recognizes music within a video with copyright infringement
            and swaps that music with other copyright free suggestions . 
            I worked with UX Designers to Create the application from scratch. 
            I used Material UI, organized the design system, constantly cleaned the code to optimize it.
            The code for this website is unavailabble for it is the company's property.
            If you are a potential employer and would like to take a look at this, please contact me
            This is what the final result screens look like.
            The website is not in production yet so it is currently unvailable.
            <br/>
            <br/>
            </Typography>
            <br/>
            <br/>
            <br/>
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
