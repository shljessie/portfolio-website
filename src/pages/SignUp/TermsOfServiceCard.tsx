import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Collapse,
  FormControlLabel,
  IconButton,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  termCard: {
    margin: theme.spacing(2, 0)
  }
}));

const getTermCardLabel = (key: string) => {
    switch (key) {
        case 'agree_term_1':
            return 'I agree Terms and Conditions'
        case 'agree_term_2':
            return 'I agree Privacy Policy'
        default:
            return ''
    }
}

const getTermTextContents = (key: string) => {
  switch (key) {
    case 'agree_term_1':
      return (
          <CardContent>
            <Typography paragraph>
              <b>Last modified: May 13, 2020</b>
            </Typography>
            <Typography paragraph>
              Thank you for using Cochl. Sense APIs and SDKs. Please read these terms and conditions carefully before using Our Service.
            </Typography>
            <Typography paragraph>
              <b>A. Definitions</b>
            </Typography>
            <Typography paragraph>
              We refer to the terms below, terms within everything we offer, including APIs, SDKs, documentation, models, functions, software, technical support, updates and any guidelines from our services as the “Terms”.
            </Typography>
            <Typography paragraph>
              These terms and conditions govern the use of and access to “Service” which includes Sense APIs and SDKs (“Sense”) and the website made available to users at https://dashboard.cochlear.ai (“this website” or the “Site”). 
            </Typography>
            <Typography paragraph>
              “You” or “User” means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. 
            </Typography>
            <Typography paragraph>
              Under the Terms, “Cochl.” (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Cochlear.ai, with office at A-301, 26, Bongeunsa-ro 51-gil, Gangnam-gu, Seoul 06103, Republic of Korea.
            </Typography>                           
            <Typography paragraph>
              <b>B. Acknowledgement</b>
            </Typography>
            <Typography paragraph>
              These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </Typography>
            <Typography paragraph>
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
            </Typography>
            <Typography paragraph>
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
            </Typography>
            <Typography paragraph>
              You represent that you are over the legal age. The Company does not permit those under the legal age to use the Service.
            </Typography>
            <Typography paragraph>
              Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
            </Typography>
            <Typography paragraph>
              <b>C. Termination</b>
            </Typography>
            <Typography paragraph>
              You are free to stop using our Service at any time. We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if:
            </Typography>
            <Typography paragraph>
              - You breach these Terms and Conditions,
            </Typography>
            <Typography paragraph>
              - You are using the Service in a manner that would cause a real risk of harm or loss to us or other uses, or
            </Typography> 
            <Typography paragraph>
              - You haven’t accessed our Service for 12 consecutive months and you do not have credits in your account.
            </Typography> 
            <Typography paragraph>
              Upon termination, Your right to use the Service will cease immediately.
            </Typography>
            <Typography paragraph>
              <b>D. Limitation of liability</b>
            </Typography>
            <Typography paragraph>
              Cochl. guarantees the highest quality of its operations to ensure accessibility and continuity of offered Services in accordance with their use and purpose.
            </Typography> 
            <Typography paragraph>
              Cochl. does not guarantee compatibility of offered Services with other producers’ software. You shall bear responsibility for the choice and consequences following from the use of other software including its applicability to the User’s objectives.
            </Typography>
            <Typography paragraph>
              Cochl. shall bear no liability in particular for:
            </Typography>
            <Typography paragraph>
              - all negative consequences being the result of force majeure,
            </Typography>
            <Typography paragraph>
              - unlawful and inconsistent with these Terms and Conditions usage of Services,
            </Typography>
            <Typography paragraph>
              - disturbances in accessibility of offered Services not caused by Cochl.,
            </Typography>
            <Typography paragraph>
              - damage that may result from imperfect performance or unpredictable behavior of the Service,
            </Typography>
            <Typography paragraph>
              - damages following from the User or the impossibility to use offered Services including damage actually suffered, the loss of expected profits/benefits, data loss, damage or computer crash, the costs of substitute equipment and software, shut-down, company reputation infringement.
            </Typography>
            <Typography paragraph>
              <b>E. Registration</b>
            </Typography>
            <Typography paragraph>
              You may be required to sign up for an account and select the account information (such as identification or contact details) and you are responsible for all activity on your account. Please be careful with protecting your account password and contact us if you encounter any issues about your account as soon as possible. Any registration information you give to Cochl. will always be accurate and up to date and inform ups about any updates. Cochl. will not be liable for any losses caused by any unauthorized use of your account.
            </Typography>
            <Typography paragraph>
              <b>F. Compliance with Law, Third Party Rights</b>
            </Typography>
            <Typography paragraph>
              You will comply with all applicable law, regulation, and third party rights (including without limitation any right of privacy or intellectual property rights, the import or export of data or software, privacy, and local laws). You will not use Cochl. products to encourage or promote illegal conducts or violation of third party rights.
            </Typography>
            <Typography paragraph>
              <b>G. Intellectual property rights</b>
            </Typography>
            <Typography paragraph>
              You will comply with all applicable law, regulation, and third party rights (including without limitation any right of privacy or intellectual property rights, the import or export of data or software, privacy, and local laws). You will not use Cochl. products to encourage or promote illegal conducts or violation of third party rights.
            </Typography>
            <Typography paragraph>
              <b>Intellectual property rights of audio data</b>
            </Typography>
            <Typography paragraph>
              In particular, the Users acknowledge and consent that the audio data which the Users provide will be used by Cochl. to develop and improve its machine listening technology. Cochl. owns all data, improvements of Cochl. services, and any associated intellectual property, that result from use of Sense products and you consent to share all data with affiliates, contractors of Cochl. who are bound by non-disclosure agreements.
            </Typography>
            <Typography paragraph>
              <b>H. Notification of changes</b>
            </Typography>
            <Typography paragraph>
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
            </Typography>
            <Typography paragraph>
              By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Website and the Service.
            </Typography>
            <Typography paragraph>
              <b>I. Contact us</b>
            </Typography>
            <Typography paragraph>
              If you have any questions about these Terms and Conditions, You can contact us by email: support@cochlear.ai
            </Typography>                                                                                                                                                                     
          </CardContent>
      )
    case 'agree_term_2':
      return (
          <CardContent>
            <Typography paragraph>
              <b>Last modified: May 13, 2020</b>
            </Typography>
            <Typography paragraph>
              Personal data of users provided through using this Website and Sense APIs and SDKs is processed in accordance with the following policy:
            </Typography>
            <Typography paragraph>
              - Responsibility: The personal data provided will be stored in the Google Cloud or Amazon Web Services (AWS) under the responsibility of Cochl.
            </Typography>
            <Typography paragraph>
              - Purposes: The data is processed for the general purpose of carrying out research development and innovation studies, works or projects. In particular, but without limitation, the data is processed for the purpose of providing and managing our Service, communicating with the users regarding activities of the Service., managing the user's accounts, putting users in contact with each other, providing notices, newsletters and other electronic communications, and for any administrative and legal / judicial purposes.
            </Typography>
            <Typography paragraph>
              - Collection: We collect personal data on creating user accounts and/or via contact forms, including name, surname, email address, password, company, and job title. Users must provide and maintain true and accurate personal profile data. Users must NOT upload any sensitive data regarding racial origin, trade union membership, religion, ideology and sexual life, the user’s or third party’s health, or relative to the commission of criminal offenses or proceedings and associated penalties or fines.
            </Typography>
            <Typography paragraph>
              - Disclosure: The data is kept confidential and not communicated to anyone. However, these data may be disclosed with your previous consent to entities that collaborate in the development of research activity and to third parties when such a disclosure is authorized by law.
            </Typography>
            <Typography paragraph>
              - Confidentiality: Technical and organizational measures have been adopted to preserve and protect users’ personal information from unauthorized use or access and from being altered, lost or misused, taking into account the technological state of art, the features of the information stored and the risks to which information is exposed.
            </Typography>
            <Typography paragraph>
              - User rights: Rights to access, correct, cancel, or object to data in these files may be exercised by writing email to support@cochlear.ai
            </Typography>
            <Typography paragraph>
              - Consent: By registering as user or sending a contact form, users expressly agree to this policy, including the sending of electronic communications.
            </Typography>                                                
          </CardContent>
      )
    default:
      return null
  }
}

const TermsOfServiceCard = (props: Props) => {

  const { isAgreed, isExpanded, handleChange, handleExpandClick, name } = props;

  const classes = useStyles();

  return (
    <Card className={classes.termCard}>
      <CardHeader
        title={
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                checked={isAgreed}
                name={name}
              />
            }
            label={getTermCardLabel(name)}
          />
        }
        action={
          <>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: isExpanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={isExpanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </>
        }
      />
      <Collapse
        in={isExpanded}
        timeout={'auto'}
        unmountOnExit
        addEndListener={undefined}
      >
        { getTermTextContents(name) }
      </Collapse>
    </Card>
  )
}

interface Props {
  isAgreed: boolean | undefined
  handleChange: any
  handleExpandClick: any
  isExpanded: boolean
  name: string
}

export default TermsOfServiceCard

