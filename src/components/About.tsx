import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import { Typography, makeStyles, useTheme } from "@material-ui/core"

import FilledButton from '../components/Buttons'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import { Link } from "react-scroll";
import { Link as PageLink } from "react-router-dom";
import React from "react"
import TimeLineCont from './Timeline'
import styled from "styled-components"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  innerRoot: {
    textAlign: 'center',
    display:'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    [theme.breakpoints.up('md')]: {
      maxWidth: 1240
    },
    color:'white'
  },
  link:{
    '&:hover': {
      boxShadow: `0 0 14px #4923f4`,
    },
  }
}))

const ButtonCont = styled.div`
  display:flex;
  width: 30%;
  height: fit-content;
  align-items:center;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    }

`


const About = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <DefaultOuterRootCont style={{ paddingTop: HEADER_HEIGHT}} >
      <DefaultInnerRootCont className={classes.innerRoot}>   
      <Typography variant= "subtitle2" style= {{marginTop: theme.spacing(16), marginBottom: theme.spacing(10), textAlign: 'start', maxWidth: '65%'}} >
        Hi !   I'm Jessie Lee.
        <br/>  
        A sophmore majoring in Information Science (B.S.) with
        a concentration in Data Science and Interactive Technology at Cornell University. 
        <br/>
        <br/>
        I am passionate about the immense possibilities of machine learning and AI 
        enhancing the lives of people. But alongside the growing enchnacements of technology,
        I believe the practice of putting our technology in ethical use is important. 
        Among those issues I hope to combat sustainability and educational equality.
        I am interested in doing research in machine learning & interactive technology to combat these issues. 
        A personal passion of mine is to create data visualizations and interactive mediums that
        help people interact with and understand complex information much more easily.
        <br/>
        <br/>
        At school I am part of Cornell Data Science Insights Team where I work on gaining insight
        from complex data using a variety of machine learning methods.
        I have also worked as a Software Engineer at Dooboolab and Cochl. You can find our more about
        me by reading my resume by clicking the button to the right!
        </Typography>

        <ButtonCont style={{display:'flex', flexDirection: 'column'}}>
          <img src="jessie.png" style={{width:'90%',marginBottom: theme.spacing(3),marginTop: theme.spacing(16)}}></img>
          
            <a href="https://docs.google.com/document/d/1QFNgcO9zj-Xf6fsRxyjCGN0nNiHyRKlDmDp75iOOtJo/edit" style={{textDecoration: 'none'}}>
              <FilledButton style={{ width:'133px',  height: '41px', fontWeight: '800'}}>
                 <Typography variant="body1"> Resume </Typography>
              </FilledButton>
            </a>
          </ButtonCont>   
      </DefaultInnerRootCont>
    </DefaultOuterRootCont>
  )
}

export default About
