import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"

import EditorHeader from '../layout/EditorHeader'
import Layout from "../components/layout"
import React from "react"
import UserHeader from '../layout/UserHeader'
import VideoEdit from '../components/VideoEdit'
import { makeStyles } from "@material-ui/core"
import styled from "styled-components"

const HeaderCont = styled.div`
   display:'flex';
`
const useStyles = makeStyles(theme => ({
  
  innerCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const PageTemplate = (props: Props) => {
  const {} = props

  const classes = useStyles()

  return (
    <Layout>
      <DefaultOuterRootCont>
          <UserHeader/>
          <EditorHeader/>
        <DefaultInnerRootCont className={classes.innerCont}>
          <VideoEdit/>
        </DefaultInnerRootCont>
      </DefaultOuterRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
