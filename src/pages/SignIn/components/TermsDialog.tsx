import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Dialog,
} from "@material-ui/core";
import clsx from "clsx";
import FilledButton from "../../../components/Buttons/RoundButton";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '491px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '691px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '891px',
    },
  },
  bar: {
    background: 'rgba(17, 22, 28, 0.8)',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 600,
    height: '60px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '24px',
      height: '80px',
    },
  },
  body: {
    textAlign: 'left',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    backgroundColor: theme.palette.background.default,
  },
  bodyTextCont: {
    height: '360px',
    overflow: 'auto',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
      height: '400px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 4),
      height: '500px',
    },
    '&::-webkit-scrollbar': {
      width: '7px'
    }
  },
  footer: {
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: theme.spacing(1, 3),
    margin: theme.spacing(0, 1),
    color: theme.palette.background.paper,
    borderRadius: '16px',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 2),
      padding: theme.spacing(1, 5),
    },
  },
  dialogTextCont: {
    letterSpacing: '0.15px',
    lineHeight: '22px',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '14px',
    '& > b': {
      fontWeight: 'bold',
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 1)'
    },
    [theme.breakpoints.up('sm')]: {
      lineHeight: '28px',
      fontSize: '16px',
      '& > b': {
        fontSize: '18px',
      },
    },
    [theme.breakpoints.up('lg')]: {
      lineHeight: '32px',
      fontSize: '18px',
      '& > b': {
        fontSize: '20px',
      },
    },
  },
}))

const TermTextContents = ({termKey} : {termKey: string}) => {
  const classes = useStyles();

  switch (termKey) {
    case 'agree_term_1':
      return (
        <div className={classes.dialogTextCont}>
          <b>Last modified: May 13, 2020</b>
          <br/><br/>
          Thank you for using Cochl. Sense APIs and SDKs. Please read these terms and conditions carefully before using Our Service.
          <br/><br/>
          <b>A. Definitions</b>
          <br/><br/>
          We refer to the terms below, terms within everything we offer, including APIs, SDKs, documentation, models, functions, software, technical support, updates and any guidelines from our services as the “Terms”.
          <br/><br/>
          These terms and conditions govern the use of and access to “Service” which includes Sense APIs and SDKs (“Sense”) and the website made available to users at https://dashboard.cochlear.ai (“this website” or the “Site”).
          <br/><br/>
          “You” or “User” means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          <br/><br/>
          Under the Terms, “Cochl.” (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Cochlear.ai, with office at A-301, 26, Bongeunsa-ro 51-gil, Gangnam-gu, Seoul 06103, Republic of Korea.
          <br/><br/>
          <b>B. Acknowledgement</b>
          <br/><br/>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          <br/><br/>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          <br/><br/>
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
          <br/><br/>
          You represent that you are over the legal age. The Company does not permit those under the legal age to use the Service.
          <br/><br/>
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
          <br/><br/>
          <b>C. Termination</b>
          <br/><br/>
          You are free to stop using our Service at any time. We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if:
          <br/><br/>
          - You breach these Terms and Conditions,
          <br/><br/>
          - You are using the Service in a manner that would cause a real risk of harm or loss to us or other uses, or
          <br/><br/>
          - You haven’t accessed our Service for 12 consecutive months and you do not have credits in your account.
          <br/><br/>
          Upon termination, Your right to use the Service will cease immediately.
          <br/><br/>
          <b>D. Limitation of liability</b>
          <br/><br/>
          Cochl. guarantees the highest quality of its operations to ensure accessibility and continuity of offered Services in accordance with their use and purpose.
          <br/><br/>
          Cochl. does not guarantee compatibility of offered Services with other producers’ software. You shall bear responsibility for the choice and consequences following from the use of other software including its applicability to the User’s objectives.
          <br/><br/>
          Cochl. shall bear no liability in particular for:
          <br/><br/>
          - all negative consequences being the result of force majeure,
          <br/><br/>
          - unlawful and inconsistent with these Terms and Conditions usage of Services,
          <br/><br/>
          - disturbances in accessibility of offered Services not caused by Cochl.,
          <br/><br/>
          - damage that may result from imperfect performance or unpredictable behavior of the Service,
          <br/><br/>
          - damages following from the User or the impossibility to use offered Services including damage actually suffered, the loss of expected profits/benefits, data loss, damage or computer crash, the costs of substitute equipment and software, shut-down, company reputation infringement.
          <br/><br/>
          <b>E. Registration</b>
          <br/><br/>
          You may be required to sign up for an account and select the account information (such as identification or contact details) and you are responsible for all activity on your account. Please be careful with protecting your account password and contact us if you encounter any issues about your account as soon as possible. Any registration information you give to Cochl. will always be accurate and up to date and inform ups about any updates. Cochl. will not be liable for any losses caused by any unauthorized use of your account.
          <br/><br/>
          <b>F. Compliance with Law, Third Party Rights</b>
          <br/><br/>
          You will comply with all applicable law, regulation, and third party rights (including without limitation any right of privacy or intellectual property rights, the import or export of data or software, privacy, and local laws). You will not use Cochl. products to encourage or promote illegal conducts or violation of third party rights.
          <br/><br/>
          <b>G. Intellectual property rights</b>
          <br/><br/>
          You will comply with all applicable law, regulation, and third party rights (including without limitation any right of privacy or intellectual property rights, the import or export of data or software, privacy, and local laws). You will not use Cochl. products to encourage or promote illegal conducts or violation of third party rights.
          <br/><br/>
          <b>Intellectual property rights of audio data</b>
          <br/><br/>
          In particular, the Users acknowledge and consent that the audio data which the Users provide will be used by Cochl. to develop and improve its machine listening technology. Cochl. owns all data, improvements of Cochl. services, and any associated intellectual property, that result from use of Sense products and you consent to share all data with affiliates, contractors of Cochl. who are bound by non-disclosure agreements.
          <br/><br/>
          <b>H. Notification of changes</b>
          <br/><br/>
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
          <br/><br/>
          By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Website and the Service.
          <br/><br/>
          <b>I. Contact us</b>
          <br/><br/>
          If you have any questions about these Terms and Conditions, You can contact us by email: support@cochlear.ai
          <br/><br/>
        </div>
      )
    case 'agree_term_2':
      return (
        <div className={classes.dialogTextCont}>
          <b>Last modified: May 13, 2020</b>
          <br/><br/>
          Personal data of users provided through using this Website and Sense APIs and SDKs is processed in accordance with the following policy:
          <br/><br/>
          - Responsibility: The personal data provided will be stored in the Google Cloud or Amazon Web Services (AWS) under the responsibility of Cochl.
          <br/><br/>
          - Purposes: The data is processed for the general purpose of carrying out research development and innovation studies, works or projects. In particular, but without limitation, the data is processed for the purpose of providing and managing our Service, communicating with the users regarding activities of the Service., managing the user's accounts, putting users in contact with each other, providing notices, newsletters and other electronic communications, and for any administrative and legal / judicial purposes.
          <br/><br/>
          - Collection: We collect personal data on creating user accounts and/or via contact forms, including name, surname, email address, password, company, and job title. Users must provide and maintain true and accurate personal profile data. Users must NOT upload any sensitive data regarding racial origin, trade union membership, religion, ideology and sexual life, the user’s or third party’s health, or relative to the commission of criminal offenses or proceedings and associated penalties or fines.
          <br/><br/>
          - Disclosure: The data is kept confidential and not communicated to anyone. However, these data may be disclosed with your previous consent to entities that collaborate in the development of research activity and to third parties when such a disclosure is authorized by law.
          <br/><br/>
          - Confidentiality: Technical and organizational measures have been adopted to preserve and protect users’ personal information from unauthorized use or access and from being altered, lost or misused, taking into account the technological state of art, the features of the information stored and the risks to which information is exposed.
          <br/><br/>
          - User rights: Rights to access, correct, cancel, or object to data in these files may be exercised by writing email to support@cochlear.ai
          <br/><br/>
          - Consent: By registering as user or sending a contact form, users expressly agree to this policy, including the sending of electronic communications.
          <br/><br/>
        </div>
      )
    default:
      return null
  }
}

export const TermsDialog = (props: Props) => {

  const {titleText, isOpen, onClose, onSubmit, inputName} = props

  const classes = useStyles()

  const [isBottom, setIsBottom] = useState(false)

  const scrollCheck = (event: any) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom) {
      setIsBottom(true)
    } else if (isBottom) {
      setIsBottom(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.root}}>
      <div style={{width: '100%'}} onScroll={scrollCheck}>
        <div className={clsx(classes.header, classes.bar)}>
          {titleText}
        </div>

        <div className={classes.body}>
          <div className={classes.bodyTextCont}>
            <TermTextContents termKey={inputName}/>
          </div>
        </div>

        <div className={clsx(classes.footer, classes.bar)}>
          <FilledButton
            onClick={() => {
              onSubmit(inputName, 'checkbox', null, false)
              onClose()
            }}
            className={classes.button}
          >
            Disagree
          </FilledButton>
          <FilledButton
            onClick={() => {
              onSubmit(inputName, 'checkbox', null, true)
              onClose()
            }}
            className={classes.button}
            // disabled={!isBottom} // Temporary solution bc some user said this button was always disabled.
          >
            Agree
          </FilledButton>
        </div>
      </div>
    </Dialog>
  )
}

type Props = {
  isOpen: boolean,
  onClose: any,
  onSubmit: (
    inputName: string,
    inputType: string,
    inputValue: any,
    inputChecked?: boolean
  ) => void,
  titleText: string,
  inputName: string
}
