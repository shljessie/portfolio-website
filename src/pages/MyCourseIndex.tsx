import { DarkOuterRootCont, DefaultInnerRootCont, DefaultOuterRootCont, LayoutRootCont } from "../components/Containers"

import Footer from '../layout/Footer'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import Header from "../layout/Header"
import Layout from "../components/layout"
import React from "react"
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
                    <div>MyCourseIndex</div>	
                    <VerticalDelimiter length='24px' thickness='2px' color='#fff'/>	
                    <div>2020.09.01 ~ 2021.12.31</div>	
                  </div>	
                </Typography>	
                <Typography	
                  variant='h3'	
                  style={{marginTop: theme.spacing(1), fontWeight: 'bold',fontFamily: 'Lato', textAlign: 'start'}}	
                >	
                 MyCourseIndex : Search Algorithm made with Natural Language Processing.
                </Typography>	
          </div>	
        </DefaultInnerRootCont>
      </DarkOuterRootCont>

      {	
        <img src="https://cdn-images-1.medium.com/max/800/1*3nnrdgb8xkiLPQFd0vV7aQ.gif" alt='news_main_image' className={classes.headerImage}/>	
      }	

        <DefaultOuterRootCont>
          <DefaultInnerRootCont>
            <Typography variant='subtitle1'>	
              What is MyCourseIndex?
            </Typography>	
            <br/>
            <Typography variant='body1'>
              MyCourseIndex (MCI) is a website that acts as an essential search engine for Cornell students and their courses. 
              Initially a project started for CS/INFO 4300: Language and Information, this search gathers all information from Piazza posts 
              to Textbook and Notes Resources and returns valid results for the student to utilize. 
              It is now being maintained and improved by us, members of Cornell Data Science Project Team. 
              Our three advisors are Prof. Trummer, Prof. Thorsten, and Prof. Jeff. We are currently a team of 8 spanning different sub-teams 
              of CDS who are all hoping that this project will leave a mark on the Cornell community. 
            </Typography>
            <br/>
            <br/>
            <Typography variant='subtitle1'>	
              Goals
            </Typography>	
            <br/>
            <Typography variant='body1'>
            The project initially consisted of search similarity algorithms like cosine similarity, 
            exact matching, and SVD to generate search results for a user’s particular query. 
            It also had a FERPA regulated security system that used Cornell’s 2-Factor Authentication in Microsoft AD 
            to maintain who is allowed to access the website. Lastly, the website had concept matching and simstring algorithms 
            to generate the correct concept tags for each search result. The aim for this semester was to continue with more 
            enhancements, which will be discussed below, in the project and further develop the usability of the website.

            The initial objective of MyCourseIndex for this semester was to tackle the addition of a question answering model 
            into our website as the ML component, in addition to the architecture and enhanced pipelines of a class signup as 
            the backend component, and the cross-compatibility as the front-end component. 
            The project should be treated as a full-stack software where developers can express their ideas in tackling the issue 
            presented in the Overview. 
            </Typography>

            <Typography variant='subtitle2'>
            You can checkout the final website at <a href="">MyCourseIndex.com</a>
            The code for this project is available at <a href="">MyCourseIndex Github</a>
            The final presentation is here at <a href="">Final Presentation</a>
            The final report for this project is here at <a href="">Final Report</a>
            </Typography>

            - images
              - myCOurseIndex Demo



          </DefaultInnerRootCont>
        </DefaultOuterRootCont>

      <Footer />
      </LayoutRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
