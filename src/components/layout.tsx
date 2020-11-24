import "./layout.css"

import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: '100vh',
    backgroundColor: "#101010",
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap"
        />

        {/* <Header/> */}
        <div className={classes.main}>
          {children}
        </div>
      </>
  )
}

type Props = {
  children: React.ReactNode,
}

export default Layout
