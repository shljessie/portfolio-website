import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import { Typography, makeStyles, useTheme } from "@material-ui/core"

import FilledButton from '../components/Buttons'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import { Link } from "react-scroll";
import { Link as PageLink } from "react-router-dom";
import React from "react"
import styled from "styled-components"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  innerRoot: {
    textAlign: 'center',
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
  flex-direction: row;
  align-items:start;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    height: 10%;
    width: 100%;
    }

`


const PageHeader = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <DefaultOuterRootCont style={{ paddingTop: HEADER_HEIGHT}} >
      <DefaultInnerRootCont className={classes.innerRoot}>        
        <Typography variant= "h5" style= {{marginTop: theme.spacing(16), marginBottom: theme.spacing(10), textAlign: 'start'}} >
        Hi! I am Jessie Lee, a student studying <br />
        <a href="https://prod.cis.cornell.edu/cornell-computing-information-science" className={classes.link} style = {{textDecoration: 'none', color: '#4923f4'}}>
         Data Science & Interactive Technology  @Cornell University.
        </a> <br/>
        I'm currently working at  <a href="https://www.cochl.ai/" className={classes.link} style = {{textDecoration: 'none', color: '#4923f4'}}> Cochl. </a> as a Software Engineer.<br/> 
        </Typography>

        <ButtonCont>
          
            <a href="https://docs.google.com/document/d/1QFNgcO9zj-Xf6fsRxyjCGN0nNiHyRKlDmDp75iOOtJo/edit" style={{textDecoration: 'none'}}>
              <FilledButton style={{ width:'133px',  height: '41px', fontWeight: '800'}}>
                 <Typography variant="body1"> Resume </Typography>
              </FilledButton>
            </a>
            <Link
              activeClass="active"
              to="howto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: 'pointer'}}
              > 
              <Typography variant="subtitle1"> Click to see my work!</Typography>
              </Link>
    
        </ButtonCont>


      </DefaultInnerRootCont>
    </DefaultOuterRootCont>
  )
}

export default PageHeader
