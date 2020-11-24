import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"

import FilledButton from '../components/Buttons'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import { Link } from "react-scroll";
import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  innerRoot: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 840
    },
  },
  title: {
    fontWeight: 'bold',
    marginTop: theme.spacing(14),
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(20)
    },
  }
}))

const DescriptionCont = styled.div`
  color: #fff;
  height: 48px;
  margin: 48px;
  text-align: 'center';
  line-height:23.92px;
`
const ButtonCont = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`


const PageHeader = (props: Props) => {
  const { title } = props

  const classes = useStyles()

  return (
    <DefaultOuterRootCont style={{ paddingTop: HEADER_HEIGHT}} >
      <DefaultInnerRootCont className={classes.innerRoot}>
        <Typography variant='h2' className={classes.title}>
          { title }
        </Typography>

        
        <Typography variant= "body1" style= {{color: "white", marginTop: '48px', marginBottom: '81px', fontFamily: 'Montserrat'}} >
        Lorem ipsum dolor sit amet,  
        <a href="#" style = {{textDecoration: 'none', color: '#8783C8'}}>  How it works</a> adipiscing elit. 
        Rhoncus maecenas ut mi <br/> faucibus augue vulputate. 
        Lorem ipsum <a href="#" style = {{textDecoration: 'none', color: '#8783C8'}}> Target audience.</a>
        </Typography>

        <ButtonCont>
        <FilledButton style={{width:'133px',  height: '41px'}}>
          <Typography variant= 'button'>Get Started</Typography>
        </FilledButton>

        {/* insert down button here!  */}
        <FilledButton style={{marginTop: theme.spacing(22)}} >
        <Link
          className={classes.innerRoot}
          activeClass="active"
          to="howto"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          > MORE
          </Link>
        </FilledButton>
    
        </ButtonCont>


      </DefaultInnerRootCont>
    </DefaultOuterRootCont>
  )
}

type Props = {
  title: string
}

export default PageHeader
