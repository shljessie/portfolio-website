import { DefaultInnerRootCont } from "../components/Containers"
import FilledButton from '../components/Buttons'
import Footer from '../layout/Footer'
import Layout from "../components/layout"
import Link from '@material-ui/core/Link';
import React from "react"
import { Link as RouterLink } from 'react-router-dom'
import StarsIcon from '@material-ui/icons/Stars';
import { Typography } from "@material-ui/core"
import UserHeader from '../layout/UserHeader'
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import theme from "../theme"

const ReadyContainer = styled.div`
    background-color: #8687FF;
`
const ServicesContainer = styled.div`
    width: 80%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px auto;
`
const ServicesItem = styled.div`
    width: 30%; 
    height: 380px;
    background-color: black;
`

const useStyles = makeStyles(theme => ({
  root:{
    flexDirection: 'column',
  },
  link: {
    textAlign: 'center',
    color: '#fff',
  },
  readyInnerRoot:{
    marginLeft: 'auto',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
    marginRight: 'auto',
    width: '50%',
    height: 'auto',
  },
  serviceInnerRoot:{
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '30px',
    paddingTop: theme.spacing(12),
    width: '80%',
  },
  readyTitle: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: theme.spacing(3)
  },
  button:{
    backgroundColor: '#121212',
    width:'180px',
    height: '41px',
    border:"none",
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: `0 0 14px #fff`,
      color: 'black'
    },
  },
  descrip: {
    marginTop: theme.spacing(2),
    color: '#fff'
  },
  serviceItem:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: theme.spacing(8),
  }
}))

const PageTemplate = (props: Props) => {
  const {} = props

  const classes = useStyles()

  const SubscribeForm= () =>{
    return(
      <div  style={{ paddingTop: theme.spacing(10) , paddingBottom: theme.spacing(20)}}>
        <Typography variant = "subtitle2" style= {{color: 'white', marginBottom: theme.spacing(4)}}>Subscribe to our newsletter</Typography>
        <input type="e-mail" style={{width: '200px', height:'30px'}} placeholder="Email address" />
        <FilledButton style={{  width: "90px", height: '38px', marginLeft: '23px'}}><Typography variant="button"> Sign up </Typography></FilledButton>
      </div>
    );
  }

  return (
    <Layout>
      <div className={classes.root}>
      <UserHeader/>
        <ReadyContainer> 
          <DefaultInnerRootCont className={classes.readyInnerRoot}>
          <Typography variant='h2' className={classes.readyTitle}>
            Ready Let's Try ~ 
          </Typography>
          <Typography variant='subtitle2' className={classes.descrip}>
          If you’re brand new to Cochl, jump to our Quick-start guide. We can ~
          </Typography>
          </DefaultInnerRootCont>
        </ReadyContainer>

              <ServicesContainer>
                <ServicesItem>
                    <div className={classes.serviceItem}>
                    <StarsIcon style={{ fontSize: 100 , color: 'white', marginBottom: theme.spacing(2)}}/>
                    <Typography variant="h6" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Music Swapper</Typography>
                    <Typography variant="body1" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <FilledButton className={classes.button} component={RouterLink} to="/uploadvideo"> 
                      <Typography variant="button">
                        Get Started
                      </Typography>
                    </FilledButton>
                    </div>
                </ServicesItem>
                <ServicesItem>
                    <div className={classes.serviceItem}>
                    <StarsIcon style={{ fontSize: 100 , color: 'white', marginBottom: theme.spacing(2)}}/>
                    <Typography variant="h6" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Music Swapper</Typography>
                    <Typography variant="body1" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <FilledButton className={classes.button} component={RouterLink} to="/uploadvideo"> 
                      <Typography variant="button">
                        Get Started
                      </Typography>
                    </FilledButton>
                    </div>
                </ServicesItem>
                <ServicesItem>
                    <div className={classes.serviceItem}>
                    <StarsIcon style={{ fontSize: 100 , color: 'white', marginBottom: theme.spacing(2)}}/>
                    <Typography variant="h6" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Music Swapper</Typography>
                    <Typography variant="body1" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <FilledButton className={classes.button} component={RouterLink} to="/uploadvideo"> 
                      <Typography variant="button">
                        Get Started
                      </Typography>
                    </FilledButton>
                    </div>
                </ServicesItem>
                
              </ServicesContainer>
              <ServicesContainer>
              <ServicesItem>
                    <div className={classes.serviceItem}>
                    <StarsIcon style={{ fontSize: 100 , color: 'white', marginBottom: theme.spacing(2)}}/>
                    <Typography variant="h6" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Music Swapper</Typography>
                    <Typography variant="body1" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <FilledButton className={classes.button} component={RouterLink} to="/uploadvideo"> 
                      <Typography variant="button">
                        Get Started
                      </Typography>
                    </FilledButton>
                    </div>
                </ServicesItem>
                <ServicesItem>
                    <div className={classes.serviceItem}>
                    <StarsIcon style={{ fontSize: 100 , color: 'white', marginBottom: theme.spacing(2)}}/>
                    <Typography variant="h6" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Music Swapper</Typography>
                    <Typography variant="body1" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <FilledButton className={classes.button} component={RouterLink} to="/uploadvideo"> 
                      <Typography variant="button">
                        Get Started
                      </Typography>
                    </FilledButton>
                    </div>
                </ServicesItem>
                <ServicesItem>
                    <div className={classes.serviceItem}>
                    <StarsIcon style={{ fontSize: 100 , color: 'white', marginBottom: theme.spacing(2)}}/>
                    <Typography variant="h6" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Music Swapper</Typography>
                    <Typography variant="body1" style= {{color: 'white',  marginBottom: theme.spacing(2)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <FilledButton className={classes.button} component={RouterLink} to="/uploadvideo"> 
                      <Typography variant="button">
                        Get Started
                      </Typography>
                    </FilledButton>
                    </div>
                </ServicesItem>
              </ServicesContainer>
          <SubscribeForm />

      </div>
      <Footer />
    </Layout>
  )
}

type Props = {}

export default PageTemplate
