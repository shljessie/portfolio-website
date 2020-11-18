import React, { useContext } from "react"

import FilledButton from '../components/Buttons'
import Header from "../layout/Header"
import Howto from '../components/Howto'
import ImageSlider from "../components/ImageSlider"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import { ThemeContext } from "../context/ThemeContext"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import theme from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#101010',
  },
  innerCont: {
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  innerTextCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerImgCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  specialTextCont: {
    maxWidth: 500,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }
}))

const SubscribeForm= () =>{
  return(
    <div  style={{ paddingBottom: theme.spacing(20)}}>
      <Typography variant = "subtitle2" style= {{color: 'white', marginBottom: theme.spacing(4)}}>Subscribe to our newsletter</Typography>
      <input type="e-mail" style={{width: '200px', height:'30px'}} placeholder="Email address" />
      <FilledButton style={{  height: '38px', marginLeft: '23px', fontFamily:'Lato'}}> Sign up </FilledButton>
    </div>
  );
}


const HomePage = (props: Props) => {

  const classes = useStyles()

  const { setHeaderTheme } = useContext(ThemeContext);
  setHeaderTheme('dark')

  return (
    <Layout>
        <Header />
        <div className={classes.root}>
              <PageHeader title='MISSON STATEMENT'/>
              <Howto />
              <ImageSlider />
              <SubscribeForm />
        </div>
    </Layout>
  )
}

type Props = {}

export default HomePage
