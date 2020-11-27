import { Accordion, AccordionDetails, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles"

import AddIcon from '@material-ui/icons/Add';
import { DefaultInnerRootCont } from "../components/Containers"
import FilledButton from '../components/Buttons'
import Footer from '../layout/Footer'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import Header from '../layout/Header'
import Layout from "../components/layout"
import Link from '@material-ui/core/Link';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import React  from "react"
import { Link as RouterLink } from 'react-router-dom'
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
`
const ReadyCont = styled.div`
    width: 100%; 
    height:50vh;
    background-color: #8687FF;
`


const useStyles = makeStyles(theme => ({
  innerRoot: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 940
    },
    height: '130vh',
    paddingBottom: '700px',
    margin: 'auto',
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
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(5)
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
    marginTop: theme.spacing(20)
  },
  button:{
    backgroundColor: 'black',
    width:'180px',
    height: '41px',
    border:"none",
    borderRadius: '2px',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: `0 0 14px #fff`,
      color: 'black'
    },
  }
}))


const PageHeader = (props: Props) => {

  const classes = useStyles()

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <Header />
      <div style={{ paddingTop: HEADER_HEIGHT}} >
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
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
              <br />
              <br />
              “You” or “User” means the individual accessing or using the Service, or the company, or other legal entity 
              on behalf of which such individual is accessing or using the Service, as applicable.
              <br />
              <br />
              Under the Terms, “Cochl.” (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) 
              refers to Cochlear.ai, with office at A-301, 26, Bongeunsa-ro 51-gil, Gangnam-gu, Seoul 06103, Republic of Korea.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>2. Acknowledgment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
              These are the Terms and Conditions governing the use of this Service and the agreement that operates
              between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              <br />
              <br />
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
              These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              <br />
              <br />
              By accessing or using the Service You agree to be bound by these Terms and Conditions. 
              If You disagree with any part of these Terms and Conditions then You may not access the Service.
              <br />
              <br />
              You represent that you are over the legal age. 
              The Company does not permit those under the legal age to use the Service.
              <br />
              <br />
              Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the 
              Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, 
              use and disclosure of Your personal information when You use the Application or the Website and tells You 
              about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<AddIcon  style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>3. Termination</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
              You are free to stop using our Service at any time. We may terminate or suspend Your access immediately,
               without prior notice or liability, for any reason whatsoever, including without limitation if:
              <br />
              - You breach these Terms and Conditions,
              <br />
              - You are using the Service in a manner that would cause a real risk of harm or loss to us or other uses, or
              <br />
              - You haven’t accessed our Service for 12 consecutive months and you do not have credits in your account.
              <br />
              - Upon termination, Your right to use the Service will cease immediately.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>4. Limitation of Liability</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
              Cochl. guarantees the highest quality of its operations to ensure accessibility and continuity of 
              offered Services in accordance with their use and purpose.
              <br />
              <br />
              Cochl. does not guarantee compatibility of offered Services with other producers’ software. 
              You shall bear responsibility for the choice and consequences following from the use of other 
              software including its applicability to the User’s objectives.Cochl. shall bear no liability in particular for:
              <br />
              - all negative consequences being the result of force majeure,
              <br />
              - unlawful and inconsistent with these Terms and Conditions usage of Services,
              <br />
              - disturbances in accessibility of offered Services not caused by Cochl.,
              <br />
              - damage that may result from imperfect performance or unpredictable behavior of the Service,
              <br />
              - damages following from the User or the impossibility to use offered Services including damage 
              actually suffered, the loss of expected profits/benefits, data loss, damage or computer crash, 
              the costs of substitute equipment and software, shut-down, company reputation infringement.

              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}> 
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography  variant='subtitle2' className={classes.accordTitle}>5. Registration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
              You may be required to sign up for an account and select the account information 
              (such as identification or contact details) and you are responsible for all activity on your account. 
              Please be careful with protecting your account password and contact us if you encounter any issues about your account 
              as soon as possible. Any registration information you give to Cochl. will always be accurate and up to date and inform 
              ups about any updates. Cochl. will not be liable for any losses caused by any unauthorized use of your account.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}> 
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography  variant='subtitle2' className={classes.accordTitle}>6. Compliance with Law, Third Party Rights</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
              You will comply with all applicable law, regulation, and third party rights (including without limitation any right 
              of privacy or intellectual property rights, the import or export of data or software, privacy, and local laws). 
              You will not use Cochl. products to encourage or promote illegal conducts or violation of third party rights.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}> 
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography  variant='subtitle2' className={classes.accordTitle}>7. Intellectual property rights</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
              You will comply with all applicable law, regulation, and third party rights (including without limitation any right 
              of privacy or intellectual property rights, the import or export of data or software, privacy, and local laws). 
              You will not use Cochl. products to encourage or promote illegal conducts or violation of third party rights.
              <br/>
              <br/>
              In particular, the Users acknowledge and consent that the audio data which the Users provide will be used by Cochl. 
              to develop and improve its machine listening technology. Cochl. owns all data, improvements of Cochl. services, 
              and any associated intellectual property, that result from use of Sense products and you consent to share all data with affiliates, 
              contractors of Cochl. who are bound by non-disclosure agreements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}> 
            <AccordionSummary
              expandIcon={<AddIcon style={{color: 'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography  variant='subtitle2' className={classes.accordTitle}>8. Notification of changes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='subtitle2' className={classes.accordsubTitle}>
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material We will make reasonable efforts to provide at least 30 days’ 
              notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              <br />
              <br />
              By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. 
              If You do not agree to the new terms, in whole or in part, please stop using the Website and the Service.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordCont>
      </DefaultInnerRootCont>

          <ReadyCont> 
            <DefaultInnerRootCont className={classes.readyInnerRoot}>

            <Typography variant='h4' className={classes.readyTitle}>
              Ready to get started?
            </Typography>
            <FilledButton className={classes.button} component={RouterLink} to="/uploadvideo">
                <Typography variant= 'button'>Create a workspace</Typography>
            </FilledButton>
            <Link component={RouterLink} to="tryfree" className={classes.link} style={{textDecoration: 'none'}}> 
                Or, Try Free
            </Link>
            <Typography variant='subtitle2' className={classes.descrip}>
            Music Swapper is free to use for terms of __size. we also offer____and support.
            </Typography>
            </DefaultInnerRootCont>
          </ReadyCont>
    </div>
    <Footer />
  </Layout>
  )
}

type Props = {
  title: string
}

export default PageHeader
