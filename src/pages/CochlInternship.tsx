import { DarkOuterRootCont, DefaultInnerRootCont, DefaultOuterRootCont, LayoutRootCont, PageTitleCont } from "../components/Containers"
import React, { useContext, useState } from "react"

import Footer from '../layout/Footer'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import Header from "../layout/Header"
import Layout from "../components/layout"
import { ThemeContext } from "../context/ThemeContext"
import { Typography } from "@material-ui/core"
import { VerticalDelimiter } from "../components/Delimiters"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"

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
  body: {	
    padding: theme.spacing(4, 0, 6),	
    width: '100%',	
    maxWidth: '950px',	
    margin: '0 auto',	
    [theme.breakpoints.up('md')]: {	
      padding: theme.spacing(10, 0),	
    }	
  },	
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

      <DefaultOuterRootCont>
        <DefaultInnerRootCont>
          <div className={classes.body}>
          <Typography variant='subtitle1'>	

          Internship Experience 
          </Typography>	
          <Typography variant='body1'>	
          <a href="https://www.cochl.ai/"> Cochl. </a>is a machine learning sound recognition AI company that specializes non-verbal sound recognition. 
          I chose to work here because my main interests lied in studying interactive experiences with machine learning. 
          <br/> 
          One of Cochl.’s main products was Cochl. Sense, an AI technology that recognized non-verbal sounds around our environment such as coughs, window breaking, machine errors ..etc. 
          to prevent danger situations, analyze the health conditions of people , and prevent machine accidents in advance.
          During my time here I was able to see how machine learning technology was used in today's industry, how much in demand they were at the moment, and 
          usage ethics that were being overlooked by the industry.
          <br/> 
          Our company was a B2B company, selling our products to other companies that were interested in using our products. 
          We worked with a wide range of companies ranging from, Music Companies(SKT Flow), Mercedes Benz, Furniture Companies, Philips Home ... etc.
          While I mostly worked on software engineering, finessing our products and enhancing the software, I was able to 
          see that many industries were interested in including machine learning technology in their products to make them more 'smart'. 
          Here are a few bullet points of the main things I learned during my time at Cochl.
          <br/>
          Some of the areas in where companies wanted to implement machine learning technology was quite concerning to such as a 
          'bathroom sound recognition'. In many areas in today's machine learning industry technology was spreading at a rapid pace and legal
          measures that prohibited the infringment of rights of users were not being placed at a matching pace.
          I was also able to experience how machine learning products needed constant progress towards advancement in technology. 
          We needed to always check the performance of our products, see what areas they were performing well and what needed improvement.
          This brought me to thinking that data visualization software for machine learning researchers to check the performance of their models 
          was also an in demand need.
          </Typography>	 
          
          <Typography variant='subtitle1'>	

            Work
          </Typography>	

          <Typography variant='body1'>	

          1. Cochl Website : GraphQl, React, Gatsby, Typescript, Creative Coding
          <br/>
          I worked on Creating the Newsroom for Cochl.'s main website. When going through multiple links,
          the props passed through the location data can only be used once. So to load data, the optimal way to do this
          is to use Gatsby with GraphQL. I used GraphQL with gastby to grab the data from markdown files and then 
          style the news article accoding to the design.
          from the newsroom pages and add data to the page templates. With this, the news articles were rendered. 
          I worked with GrapQL, to query the data we wanted.

          images
          -main demo
          -graphql data queries
          -data loading screen shots..

          Cochl's website also has interactive elements to introduce the product of our services.
          It is a 3D canvas component that recognizes sounds and a 3D visualization that explaines the classification process of 
          our machine learning service.
          I created this 3D visualization element by adding a canvas section to the website. 

          images 
          -3d data visualization demo image
          -demo image.
          

          2. Mercedes Benz 
          <br/>
          Implementing Sound Recognition AI into Mercedes Benz.You can read more about it <a href="/MercedesBenz">here</a>.

          images
          - still image. add link

          3. Music Swapper : React, Typescript,Material UI
          <br/>
          Using Cochl. Sense’s product, one B2C product I worked on was ‘Music Swapper’.
          Music Swapper is an application that recognizes music within a video with copyright infringement
          and swaps that music with other copyright free suggestions . 
          I worked with UX Designers to Create the application from scratch. 
          I used Material UI, organized the design system, constantly cleaned the code to optimize it.
          The code for this website is unavailabble for it is the company's property.
          If you are a potential employer and would like to take a look at this, please contact me
          This is what the final result screens look like.

          images
          -main,
          -login
          -upload,
          -music swapping sections
          -demo screen (gif)
        


          </Typography>
          </div>
        </DefaultInnerRootCont>
      </DefaultOuterRootCont>

      <Footer />
      </LayoutRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
