import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import React, { useContext } from "react"
import { Typography, makeStyles } from "@material-ui/core"

import FilledButton from '../components/Buttons'
import { ThemeContext } from "../context/ThemeContext"
import styled from "styled-components"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
  },
  innerTextCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerImgCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  specialTextCont: {
    maxWidth: 500,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  readMoreButton:{
    marginTop: '48px',
    width:'133px',
    height: '41px',
    left: '36%', 
    fontWeight: 800, 
    display: 'flex-end', 
    alignItems: 'right',
  },
  imageCont:{
    maxWidth: '100%', 
    maxHeight: '100%',
  },
  image:{
    maxWidth: '100%', 
    maxHeight: '100%'
  },
  textbody:{
    width: '90%',
    margin: '0px auto',
    flexDirection: 'column',
    textAlign: 'start'
  },
}))

const Container = styled.div`
  display: 'flex';
  flex-direction:'column';
  align-items:'center';
`

const ProjectCont = styled.div`
  width: 75vw;
  height: 45vh;
  margin: auto;
  margin-bottom: 70px;
  border-radius: 30px;
  background-color: black;
  display:flex;
  flex-direction: row;
  align-content: center;
`
const ProjectImageRightCont = styled.div`
  width: 60%;
  height: 45vh;
  border-radius: 30px;
  background-color: red;
`
const ProjectTextRightCont = styled.div`
  width: 45%;
  height: 45vh;
  border-radius: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
`

const Howto = () => {

  const classes = useStyles()

  const { setHeaderTheme } = useContext(ThemeContext);
  setHeaderTheme('dark')

  const [tabIndex, setTabIndex] = React.useState(0)

  const onTabIndexChange = (event: React.ChangeEvent<{}>, index: number) => {
    setTabIndex(index)
  }

  return (
          <div className="howto">
          <DefaultOuterRootCont style={{ backgroundColor: 'black', marginBottom: theme.spacing(90), height:'180vh' }}>
            <DefaultInnerRootCont>
              <Container>
                <ProjectCont>
                  <ProjectImageRightCont>
                    <img src="https://cdn-images-1.medium.com/max/800/1*3nnrdgb8xkiLPQFd0vV7aQ.gif" style={{width: '100%', height: '100%'}}></img>
                  </ProjectImageRightCont>
                  <ProjectTextRightCont>
                    <Typography variant="h6" style={{ marginBottom: theme.spacing(4)}}>Mercedes Benz Sound AI </Typography>
                    <Typography variant="body1"className={classes.textbody} >
                      Making the Mercedes Benz Cockpit Display for non-verbal Sound Recognition AI.
                      Internship project at <a href="https://www.cochl.ai/" style={{textDecoration: 'none', color: 'lightpink'}}> Cochl. </a>
                    </Typography>
                    <FilledButton className={classes.readMoreButton} href="/PageTemplate" >
                      <Typography variant="body1"> Read More </Typography>
                    </FilledButton>
                  </ProjectTextRightCont>
                </ProjectCont>
                <ProjectCont>
                  <ProjectImageRightCont>
                    <img src="https://miro.medium.com/max/600/1*cQz5oTC2BleFN7ZcbQxiLw.gif" style={{width: '100%', height: '100%'}}></img>
                  </ProjectImageRightCont>
                  <ProjectTextRightCont>
                    <Typography variant="h6" style={{ marginBottom: theme.spacing(4)}}>MyCourseIndex.com </Typography>
                    <Typography variant="body1"className={classes.textbody} >
                      A course material search system made with Machine Learning and Natural Language Processing using
                      BERT QA system and Named Entity Recognition.
                      Team Project for <a href="https://cornelldata.science/" style={{textDecoration: 'none', color: 'lightpink'}}> Cornell Data Science  ,</a>
                      <a href="https://www.mycourseindex.com/about" style={{textDecoration: 'none', color: 'lightblue'}}> MyCourseIndex Team </a>
                    </Typography>
                    <FilledButton className={classes.readMoreButton} href="/MyCourseIndex">
                      <Typography variant="body1"> Read More </Typography>
                    </FilledButton>
                  </ProjectTextRightCont>
                </ProjectCont>
                <ProjectCont>
                  <ProjectImageRightCont>
                    <img src="https://cdn-images-1.medium.com/max/800/1*M5GAniz9ZLDuEuVOSKCDiQ.gif" style={{width: '100%', height: '100%'}}></img>
                  </ProjectImageRightCont>
                  <ProjectTextRightCont>
                    <Typography variant="h6" style={{ marginBottom: theme.spacing(4)}}> Coronavirus Twitter Sentiment Analysis</Typography>
                    <Typography variant="body1" className={classes.textbody}>
                      Natural Language Processing Sentiment analysis of Tweets related to Coronavirus from 10 global countries.
                      Data Visualizations Explaining the Final results of our findings are avaiable <a href="https://covid-thebois.netlify.app/visual.html">here</a>
                      <br/>Team Project at <a href="https://cornelldata.science/" style={{textDecoration: 'none', color: 'lightpink'}}> Cornell Data Science  ,</a>
                    </Typography>
                    <FilledButton  className={classes.readMoreButton} href="https://covid-thebois.netlify.app/index.html">
                      <Typography variant="body1"> Read More </Typography>
                    </FilledButton>
                  </ProjectTextRightCont>
                </ProjectCont>
                <ProjectCont>
                  <ProjectImageRightCont>
                    <img src="https://cdn-images-1.medium.com/max/1600/1*gZd98LBsHirc0pFf3H4ygw.gif" style={{width: '100%', height: '100%'}}></img>
                  </ProjectImageRightCont>
                  <ProjectTextRightCont>
                    <Typography variant="h6" style={{ marginBottom: theme.spacing(4)}}>  Cochl Internship : SoundRecognition AI , GraphQL and Data Visualization </Typography>
                    <Typography variant="body1"className={classes.textbody} >
                      Making user applications with Sound Recognition AI and handling data within software. GraphQL, React, Gatsby, Typescript.
                      Internship Journal and list of projects I conducted at at <a href="https://www.cochl.ai/" style={{textDecoration: 'none', color: 'blue', fontSize: '20px'}}> Cochl. </a>
                    </Typography>
                    <FilledButton  className={classes.readMoreButton} href="/CochlInternship">
                      <Typography variant="body1"> Read More </Typography>
                    </FilledButton>
                  </ProjectTextRightCont>
                </ProjectCont>
                <ProjectCont>
                  <ProjectImageRightCont>
                    <img src="https://cdn-images-1.medium.com/max/1600/1*gAIZ4bHnEw9xyx8fU7xOtg.gif" style={{width: '100%', height: '100%'}}></img>
                  </ProjectImageRightCont>
                  <ProjectTextRightCont>
                    <Typography variant="h6" style={{ marginBottom: theme.spacing(4)}}> Dooboolab Internship: Calendar Carousel, HackaTalk, Prime </Typography>
                    <Typography variant="body1"className={classes.textbody}>
                      React Native UI Component development, OpenSource Chatting Application with GraphQL, and Web development with Prime
                      Internship project at Dooboolab.
                    </Typography>
                    <FilledButton  className={classes.readMoreButton} href="/Dooboolab">
                      <Typography variant="body1"> Read More </Typography>
                    </FilledButton>
                  </ProjectTextRightCont>
                </ProjectCont>
              </Container>
            </DefaultInnerRootCont>
          </DefaultOuterRootCont>
          </div>
  )
}


export default Howto
