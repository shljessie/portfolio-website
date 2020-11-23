import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import { makeStyles, withStyles } from "@material-ui/core/styles"

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import FilledButton from '../components/Buttons'
import Footer from '../layout/Footer'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import Header from '../layout/Header'
import Layout from "../components/layout"
import Link from '@material-ui/core/Link';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import React  from "react"
import { Link as RouterLink } from 'react-router-dom'
import { Typography } from "@material-ui/core"
import styled from "styled-components"
import theme from "../theme"

const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid white',
    borderTop: '1px solid white',
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordCont = styled.div`
    width: 100%; 
    margin-bottom: 50%;
`
const ReadyCont = styled.div`
    width: 100%; 
    height:50vh;
    margin-bottom: 0%;
    background-color: #8687FF;
`


const useStyles = makeStyles(theme => ({
  innerRoot: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 940
    },
  },
  title: {
    fontWeight: 'bold',
    marginTop: theme.spacing(8),
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8)
    },
  },
  modifiedDate: {
    color: 'white',
    fontStyle: 'italic',
    marginTop: theme.spacing(2),
    fontWeight: 300,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2)
    },
  },
  subTitle:{
    color: 'white',
    fontSize: '15px',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(8),
    },
  },
  accordTitle:{
    color: 'white',
    fontSize: '20px',
  },
  accordsubTitle:{
    color: 'white',
    fontSize: '14px',
    textAlign: 'start',
    fontWeight: 100,
    margin: theme.spacing(2.5)
  },
  readyTitle: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: theme.spacing(3)
  },
  link: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  descrip: {
    marginTop: theme.spacing(2),
    color: '#fff'
  },
  readyInnerRoot:{
    display: 'block',
    marginLeft: 'auto',
    paddingTop: theme.spacing(10),
    marginRight: 'auto',
    width: '50%',
  },
  button:{
    backgroundColor: 'black',
    width:'180px',
    height: '41px',
    border:"none",
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: `0 0 14px #fff`,
      color: 'black'
    },
  }
}))


const PageHeader = (props: Props) => {

  const classes = useStyles()

  return (
    <Layout>
      <Header />
      <DefaultOuterRootCont style={{ paddingTop: HEADER_HEIGHT}} >
      <DefaultInnerRootCont className={classes.innerRoot}>
        <Typography variant='h4' className={classes.title}>
          Terms of Service
        </Typography>
        <Typography variant='body1' className={classes.modifiedDate}>
        Last modified: May 13, 2020
        </Typography>
        <Typography variant='subtitle2' className={classes.subTitle}>
        Thank you for using Cochl. Sense APIs and SDKs. Please read these terms and conditions carefully before using Our Service.
        </Typography>


        <AccordCont>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>1. Definitions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
              We refer to the terms below, terms within everything we offer, including APIs, SDKs, documentation,
              models, functions, software, technical support, updates and any guidelines from our services as the “Terms”.
              <br />
              <br />
              These terms and conditions govern the use of and access to “Service” which includes Sense APIs and SDKs 
              (“Sense”) and the website made available to users at https://dashboard.cochlear.ai (“this website” or the “Site”).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>2. Acknowledgment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon  style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>3. Termination</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>4.Terms of Service</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>5. Terms of Service</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordCont>
       
        
      </DefaultInnerRootCont>
    </DefaultOuterRootCont>

    <ReadyCont> 
      <DefaultInnerRootCont className={classes.readyInnerRoot}>

      <Typography variant='h4' className={classes.readyTitle}>
         Ready to get started?
      </Typography>
      <FilledButton className={classes.button} component={RouterLink} to="/uploadvideo">
          <Typography variant= 'button'>Create a workspace</Typography>
      </FilledButton>
      <Link component={RouterLink} to="/tryfree" className={classes.link}> 
          Or, Try Free
      </Link>
      <Typography variant='subtitle2' className={classes.descrip}>
      Music Swapper is free to use for terms of __size. we also offer____and support.
      </Typography>
      </DefaultInnerRootCont>
    </ReadyCont>

    <Footer />
  </Layout>
  )
}

type Props = {
  title: string
}

export default PageHeader
