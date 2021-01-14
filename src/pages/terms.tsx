import { DefaultInnerRootCont, DefaultOuterRootCont, LayoutRootCont, SmallPageTitleCont } from "../components/Containers"
import React , { useContext }  from "react"

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Layout from "../components/layout"
import { TERMS_CONDITIONS_DATA } from '../constants/PageData'
import { ThemeContext } from "../context/ThemeContext"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import theme from '../theme'

const useStyles = makeStyles(theme => ({
  accordianCont:{
    paddingBottom: theme.spacing(40),
    backgroundColor: 'white'
  },
  accordian:{
    marginBottom: theme.spacing(4.5),
    backgroundColor: 'white',
    boxShadow: '0px 0px 13px gray',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(7),
    paddingLeft: theme.spacing(7),
    [theme.breakpoints.down('md')]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
    },
  }
}))

const PageTemplate = () => {

  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { setHeaderTheme } = useContext(ThemeContext);	

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <Header/>
      <LayoutRootCont style={{backgroundColor: 'white'}} >
        <SmallPageTitleCont style={{ backgroundColor: 'white', fontSize: '20px'}}>
          Frequently asked Questions
        </SmallPageTitleCont>
        <DefaultOuterRootCont style={{width: '65%', margin: 'auto'}}>
          <DefaultInnerRootCont className={classes.accordianCont}>
            <Typography variant="subtitle1">Last updated: December 21st, 2020</Typography>
            <Typography variant="body1" style={{paddingBottom: theme.spacing(8)}}>
              Feel free to email me with any questions you have !
            </Typography>
              {
                TERMS_CONDITIONS_DATA.map((title,i) => {
                  return(
                  <Accordion className={classes.accordian} style={{border:'none', color: '#4923f4'}} expanded={expanded === TERMS_CONDITIONS_DATA[i].title } onChange={handleChange(TERMS_CONDITIONS_DATA[i].title)}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{color:'#4923f4',display:'flex', textAlign: 'start'}}/>}
                      aria-controls="panel1a-content">
                      <Typography variant="subtitle1" style={{ fontWeight:'bold',display:'flex',  whiteSpace: 'pre-wrap',textAlign: 'start'}}>
                        {TERMS_CONDITIONS_DATA[i].title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1" paragraph style={{color:'black', textAlign: 'start'}} >
                        {TERMS_CONDITIONS_DATA[i].description.split('\n').map(
                          function(item: React.ReactNode, key: string | number | null | undefined) {
                            return (
                              <span key={key}>
                                {item}
                                <br/>
                                <br/>
                              </span>
                            )
                          })}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  )
                })
              }
          </DefaultInnerRootCont>
        </DefaultOuterRootCont>
      </LayoutRootCont>
      <Footer/>
    </Layout>
  )
}

export default PageTemplate
