import { DarkOuterRootCont, DefaultInnerRootCont, DefaultOuterRootCont, LayoutRootCont, PageTitleCont } from "../components/Containers"
import React, { useContext, useState } from "react"

import Footer from '../layout/Footer'
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import Header from "../layout/Header"
import Layout from "../components/layout"
import { ThemeContext } from "../context/ThemeContext"
import { Typography } from "@material-ui/core"
import { VerticalDelimiter } from "../components/Delimiters"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  root: {	
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
    height: '560px',	
    width: '90%',
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
}))

const PageTemplate = (props: Props) => {
  const {} = props
  const classes = useStyles()

  return (
    <Layout>
      <LayoutRootCont>
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
                 MyCourseIndex
                </Typography>	
          </div>	
        </DefaultInnerRootCont>
      </DarkOuterRootCont>

      {	
        <img src="https://cdn-images-1.medium.com/max/800/1*3nnrdgb8xkiLPQFd0vV7aQ.gif" alt='news_main_image' className={classes.headerImage}/>	
      }	

      <Footer />
      </LayoutRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
