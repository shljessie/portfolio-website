import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"

import FilledButton from '../components/Buttons'
import Layout from "../components/layout"
import Link from '@material-ui/core/Link';
import React from "react"
import { Link as RouterLink } from 'react-router-dom'
import { Typography } from "@material-ui/core"
import UserHeader from '../layout/UserHeader'
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import theme from "../theme"

const ReadyCont = styled.div`
    width: 100%; 
    height:50vh;
    margin-bottom: 0%;
    background-color: #8687FF;
`

const useStyles = makeStyles(theme => ({
  link: {
    textAlign: 'center',
    color: '#fff',
  },
  readyInnerRoot:{
    display: 'block',
    marginLeft: 'auto',
    paddingTop: theme.spacing(15),
    marginRight: 'auto',
    width: '50%',
  },
  readyTitle: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: theme.spacing(3)
  },
  button:{
    backgroundColor: 'black',
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
}))

const PageTemplate = (props: Props) => {
  const {} = props

  const classes = useStyles()

  return (
    <Layout>
      <UserHeader/>
      <DefaultOuterRootCont>
          <DefaultInnerRootCont className={classes.readyInnerRoot}>

        
          </DefaultInnerRootCont>
      </DefaultOuterRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
