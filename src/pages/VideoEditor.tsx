import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import { Typography, makeStyles } from "@material-ui/core"

import EditorHeader from '../layout/EditorHeader'
import Layout from "../components/layout"
import React from "react"
import ReactPlayer from 'react-player'
import UserHeader from '../layout/UserHeader'
import styled from "styled-components"
import theme from '../theme'

const HeaderCont = styled.div`
   display:'flex';
`
const useStyles = makeStyles(theme => ({
  innerCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
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
          {/* using react player to play a video
            file types can be played with React Player like this
            add 'playing' to the start before url call
            all basic file types are supported.
            file imports are played using html <video> tags
            <ReactPlayer playing url={['foo.webm', 'foo.ogg']} /> 
            or
            <ReactPlayer
              playing
              url={[
                {src: 'foo.webm', type: 'video/webm'},
                {src: 'foo.ogg', type: 'video/ogg'}
              ]}
            />
            */}
         <ReactPlayer url='https://www.youtube.com/watch?v=J-41C8UAMbE' />
         <Typography variant="body2" style={{color: 'gray', marginTop: theme.spacing(2), fontWeight: 300}}>
            We detected music in the numbered sections. All numbered section will be separated.
         </Typography>
         
        </DefaultInnerRootCont>
      </DefaultOuterRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
