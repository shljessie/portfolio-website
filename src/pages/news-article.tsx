import { DarkOuterRootCont, DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import { Grid, Typography, useMediaQuery } from "@material-ui/core"
import { HEADER_HEIGHT, NEWS_ITEM } from "../constants/GlobalStyles"
import { NEWS_CATEGORIES, NEWS_ITEMS, NewsItemProps } from "../constants/NewsData"
import React, { useContext, useState } from "react"

import Layout  from "../components/layout"
import { NewsItem } from "../components/NewsItem"
import { ResponsiveGrid } from "../components/ResponsiveGrid"
import { ThemeContext } from "../context/ThemeContext"
import { VerticalDelimiter } from "../components/Delimiters"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import theme from "../theme"

const useStyles = makeStyles(theme => ({	
  root: {	
  },	
  header: {	
    paddingTop: HEADER_HEIGHT,	
    paddingBottom: '100px'	
  },	
  headerSubtitle: {	
    marginTop: theme.spacing(4),	
    display: 'flex',	
    alignItems: 'center',	
  },	
  headerImage: {	
    display: 'block',	
    height: 'auto',	
    width: '100%',	
    margin: '-50px auto 0',	
    [theme.breakpoints.up('md')]: {	
      width: '85%',	
      maxWidth: '1150px',	
    }	
  },	
  body: {	
    padding: theme.spacing(4, 0, 6),	
    width: '100%',	
    maxWidth: '950px',	
    margin: '0 auto',	
    [theme.breakpoints.up('md')]: {	
      padding: theme.spacing(10, 0),	
    }	
  },	
  paragraphImage: {	
    display: 'block',	
    margin: theme.spacing(4, 0),	
    width: '100%',	
    height: 'auto'	
  },	
  newsCont: {	
    display: 'flex',	
    alignItems: 'flex-start',	
    flexWrap: 'wrap',	
    marginBottom: theme.spacing(10),	
  },	
  latestNewsTitle: {	
    textAlign: 'center',	
    marginBottom: theme.spacing(3),	
    [theme.breakpoints.up('md')]: {	
      marginBottom: theme.spacing(6),	
    }	
  },	
  viewAllLinkCont: {	
    display: 'flex',	
    justifyContent:'center',	
    alignItems: 'center',	
    margin: theme.spacing(10, 0, 20),	
    [theme.breakpoints.up('md')]: {	
      margin: theme.spacing(10, 0, 24),	
    }	
  },	
  viewAllLink: {	
    display: 'inline-flex',	
    justifyContent:'center',	
    alignItems: 'center',	
    color: '#0056FF',	
    textDecoration: 'none',	
    '&:hover': {	
      textDecoration: 'underline'	
    }	
  },	
}))	

type NewsPageState = {	
  newsItemProps: NewsItemProps	
}	

const newsItemDefaultState = {	
  subject: '',	
  category: 0,	
  date: '',	
  summary: '',	
  imgUrls: [],	
  paragraphs: []	
}	

type ViewAllLinkTextProps = {	
  isActive: boolean	
}	

const ViewAllLinkText = styled.div`	
  font-weight: 600;	
  opacity: ${(props: ViewAllLinkTextProps) => props.isActive ? 1 : 0.7};	
  transition: opacity 0.3s ease;	
  position: relative;	
  &::after {    	
    background: none repeat scroll 0 0 transparent;	
    bottom: -3px;	
    content: "";	
    display: block;	
    height: 2px;	
    left: 50%;	
    position: absolute;	
    background: #000;	
    transition: width 0.3s ease 0s, left 0.3s ease 0s;	
    width: 0;	
  }	
  &:hover::after { 	
    width: 100%; 	
    left: 0%;	
  }	
`	

const News: React.FC = () => {	


  const classes = useStyles()	

  const { setHeaderTheme } = useContext(ThemeContext);	
  setHeaderTheme('dark')	

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))	
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))	

  const [triggerButtonAnimation, setTriggerButtonAnimation] = useState(false)	

  return (	
    <Layout>	
        <div className={classes.root}>	
          <DarkOuterRootCont className={classes.header}>	
            <DefaultInnerRootCont style={{display: 'flex'}}>	
              <div style={{width: '100%', maxWidth: '1040px', marginTop: theme.spacing(6)}}>	
                <Typography variant='body2'>	
                  <div className={classes.headerSubtitle}>	
                    <div>Mercedes Benz</div>	
                    <VerticalDelimiter length='12px' thickness='1px' color='#fff'/>	
                    <div>December 31st, 2020</div>	
                  </div>	
                </Typography>	
                <Typography	
                  variant='h4'	
                  style={{marginTop: theme.spacing(1)}}	
                >	
                  Hello
                </Typography>	
              </div>	
            </DefaultInnerRootCont>	
          </DarkOuterRootCont>	


            <img src="../images/benz.png" alt='news_main_image' className={classes.headerImage}/>	

          <DefaultOuterRootCont>	
            <DefaultInnerRootCont>	
              <div className={classes.body}>	
                <Typography variant='body1'>		
                          <p style={{marginBottom: theme.spacing(4)}}>Hi</p>	
                          <img src="../images/benz.png" alt={'Paragraph Image ' + 1} className={classes.paragraphImage}/>	
                </Typography>	
              </div>	

              <Typography variant='h6' className={classes.latestNewsTitle} style={{ fontWeight: 600 }}>	
                The Latest News	
              </Typography>	

              <div className={classes.newsCont}>	
                <Grid container spacing={NEWS_ITEM.spacing as any}>	
                  {	
                    NEWS_ITEMS.slice(0, isDesktop ? 6 : isTablet ? 4 : 2).map((newsItem) => (	
                      <ResponsiveGrid>	
                        <NewsItem newsItemProps={newsItem}/>	
                      </ResponsiveGrid>	
                    ))	
                  }	
                </Grid>	
              </div>	

              <Typography variant='body1' className={classes.viewAllLinkCont}>	
                  View all	
              </Typography>	

            </DefaultInnerRootCont>	
          </DefaultOuterRootCont>	
        </div>	
    </Layout>	
  )	
}	

type Props = {}	

export default News	
