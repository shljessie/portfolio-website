import React, { useContext } from "react"

import Footer from '../layout/Footer'
import Header from "../layout/Header"
import Howto from '../components/Howto'
import ImageSlider from "../components/ImageSlider"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import { ThemeContext } from "../context/ThemeContext"

const HomePage = () => {

  const { setHeaderTheme } = useContext(ThemeContext);
  setHeaderTheme('dark')
  
  return (
    <Layout>
        <Header />
          <PageHeader/>
          <Howto />
          <ImageSlider />
          <Footer/>
    </Layout>
  )
}

export default HomePage
