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
      <LayoutRootCont style={{backgroundColor: 'white', height: '420vh'}}>
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
        <img src="https://github.com/oscarso2000/MyCourseIndex/raw/master/demo/1998.gif" alt='news_main_image' className={classes.headerImage}/>	

    <DefaultOuterRootCont style={{color: 'black'}}>
          <DefaultInnerRootCont className={classes.headerCont} style={{textAlign: 'start'}}>
            <br/> 
            <Typography variant='subtitle1'>	
               Internship Experience 
            </Typography>	
            <br/> 
            <br/> 
            <Typography variant='body1' style={{fontSize: '19px'}}>
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
              Features of MyCourseIndex.com
            </Typography>	
            <br/>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            The project initially consisted of search similarity algorithms like cosine similarity, 
            exact matching, and SVD to generate search results for a user’s particular query. 
            It also had a FERPA regulated security system that used Cornell’s 2-Factor Authentication in Microsoft AD 
            to maintain who is allowed to access the website. Lastly, the website had concept matching and simstring algorithms 
            to generate the correct concept tags for each search result. The aim for this semester was to continue with more 
            enhancements, which will be discussed below, in the project and further develop the usability of the website.
            <br/>
            <br/>
            The initial objective of MyCourseIndex was to tackle the addition of a question answering model 
            into our website as the ML component, in addition to the architecture and enhanced pipelines of a class signup as 
            the backend component, and the cross-compatibility as the front-end component. 
            The project should be treated as a full-stack software where developers can express their ideas in tackling the issue 
            presented in the Overview. 
            </Typography>
            <br/>
            <br/>
            <br/>
            <Typography variant='subtitle1'>	
              Search Engine Enhancement: Question Answering Model & Text Understanding
            </Typography>	
            <br/>
            <Typography variant='subtitle1'>	
             Text Understanding
            </Typography>	
            <br/>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            In this project, I worked on enchancing the Text Understanding features of our search engine.
            We conducted Text Understanding to improve the text recognition features of MyCourseIndex 
            that could be used in future cheatsheet generation and improving search queries. 
            To improve Text Understanding, we conducted Named Entity Recognition (NER) with BERT. 
            Here we took two approaches to NER. We conducted multi class classification based NER and Conditional Random Field (CRF) based classification.
             The text data we used are Cornell course material, textbooks, wikipedia articles. 
             We chose text examples that would be most relevant to the text that MyCourseIndex would be receiving. 
             We labeled the data with IOB and set our predefined categories to concepts, definitions, and examples.  
             With this we labeled the data considering the main information that students would be looking for when studying and preparing for a course.
              With this we trained the data with token embeddings, mask word embeddings and segmentation embeddings.
            <br/>
            <br/>
            We have also built up a glossary of over 5 million words using the C4 (Cleaned Common Crawl Corpus) dataset. 
            This expansion of the dataset allows for the strengthening of the rules based system for extracting concepts however 
            it lacks a sense differentiation along with a relational mapping to determine what an item’s relation may be (hyponym / hypernym relations). 
            Following Angeli et al (2015), we started to develop a module to extract a set of entailed clauses from a series of sentences. 
            This allows for the generation of information triples without a specific template to be filled. This work is still in progress, 
            to be combined with neural coreference to ensure that entity relations are properly assigned in a piece of text.
            </Typography>
            <br/>
            <br/>
            <br/>
            <Typography variant='subtitle1'>	
              Question Answering Model 
            </Typography>	
            <br/>
            <br/>
            <Typography variant='body1' style={{fontSize: '19px'}}>
            Another feature that other team members worked on is Question Answering Feature in 
            MyCourseIndex.com.  I created a test set of 160 questions based on the CS3110 textbook.  
            Each question consists of: id, context, question, answer, and if the question is answerable. 
            100 questions are answerable and 60 questions are unanswerable.  The questions were mainly definition based questions.  
            Tested pre trained BERT and DistilBERT on the test set (without impossible questions). 
            <br/>
            <br/>
            Imported the dataset from SQuAD2.0 instead of using the dataset created based on CS3110. 
            Those data contain more information but we extracted the same information as the baseline. 
            Used Logistic Regression on the CLS tokens to predict whether the question is answerable, 
            then used pretrained BERT to predict answers for answerable questions. The results are as following.
            This low result is unexpected and will be investigated in the upcoming semester
            </Typography>
            <br/>
            <br/>
            <Typography variant='subtitle1'>	
              Additional Information
            </Typography>	
            <br/>
            <br/>
            <Typography variant='subtitle2'>
            You can checkout the final website at but only if you are a Cornell member. 
            If not, checkout the demo image!  <a style={{textDecoration :'none'}} href=" www.mycourseindex.com">MyCourseIndex.com</a>
            <br/>
            You can contact the members for more information about the project!  <a style={{textDecoration :'none'}} href=" https://www.mycourseindex.com/about">MyCourseIndex Team</a>
            <br/>
            The code for this project is available at <a style={{textDecoration :'none'}} href="https://github.com/oscarso2000/MyCourseIndex">MyCourseIndex Github</a>
            <br/>
            The documentation for this project is here at <a style={{textDecoration :'none'}} href="https://docs.mycourseindex.com/">documentation</a>
            <br/>
            If you are not a Cornell member, many parts are not accessible do to security reasons. 
            For more information, contact me here at<a style={{textDecoration :'none'}} href="mailto: sl994@cornell.edu" > sl994@cornell.edu</a>
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
