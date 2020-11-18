/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

import Footer from "../layout/Footer"
// import Header from "../layout/Header"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: '100vh',
  },
}))

const Layout = ({ children }: Props) => {
  const classes = useStyles()

  return (
      <>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
        />
         <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
        />

        {/* <Header/> */}
        <div className={classes.main}>
          {children}
        </div>
        <Footer/>
      </>
  )
}

type Props = {
  children: React.ReactNode,
}

export default Layout
