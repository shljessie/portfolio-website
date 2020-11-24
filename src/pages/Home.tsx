import React, { useContext } from "react"

import FilledButton from '../components/Buttons'
import Footer from '../layout/Footer'
import Header from "../layout/Header"
import Howto from '../components/Howto'
import ImageSlider from "../components/ImageSlider"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import { ThemeContext } from "../context/ThemeContext"
import { Typography } from "@material-ui/core"
import theme from '../theme'

const SubscribeForm= () =>{
  return(
    <div  style={{ paddingBottom: theme.spacing(20)}}>
      <Typography variant = "subtitle2" style= {{color: 'white', marginBottom: theme.spacing(4)}}>Subscribe to our newsletter</Typography>
      <input type="e-mail" style={{width: '200px', height:'30px'}} placeholder="Email address" />
      <FilledButton style={{  width: "90px", height: '38px', marginLeft: '23px'}}><Typography variant="button"> Sign up </Typography></FilledButton>
    </div>
  );
}

const HomePage = () => {

  const { setHeaderTheme } = useContext(ThemeContext);
  setHeaderTheme('dark')
  
  return (
    <Layout>
        <Header />
          <PageHeader title='MISSON STATEMENT'/>
          <Howto />
          <ImageSlider />
          <SubscribeForm />
          <Footer/>
    </Layout>
  )
}

export default HomePage
