import "./layout.css"

import React , { useEffect, useState } from "react"

import { GENERAL_IMAGE_URLS } from "../constants/ImageUrls"
import { Z_INDEXES } from "../constants/GlobalStyles"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: '100vh',
    backgroundColor: "#101010",
  },
}))

type BackToTopButtonProps = {
  isVisible: boolean
}

const BackToTopButton = styled.img`
  position: fixed;
  transition: all .3s ease-in-out;
  visibility: ${ (props: BackToTopButtonProps) => props.isVisible ? 'visible' : 'hidden' };
  opacity: ${ (props: BackToTopButtonProps) => props.isVisible ? 1 : 0 };
  z-index: ${Z_INDEXES.scrollButton};
  width: 16px;
  height: auto;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  padding: 8px;
  @media (min-width: 600px) {
    width: 18px;
    right: 18px;
    bottom: 18px;
  }
  @media (min-width: 960px) {
    width: 20px;
    right: 30px;
    bottom: 30px;
  }
  @media (min-width: 1280px) {
     width: 22px;
     right: 60px;
     bottom: 60px;
  }
`

const Layout = ({ children }: Props) => {
  const classes = useStyles()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [])

  function onScroll() {
    setScrollPosition(window.pageYOffset)
  }

  useEffect(() => {
    setIsVisible(scrollPosition > window.innerHeight)
  }, [scrollPosition])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

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
          <BackToTopButton
            src={GENERAL_IMAGE_URLS.backToTop}
            alt='back_to_top_button'
            onClick={scrollToTop}
            isVisible={isVisible}
          />
        </div>
      </>
  )
}

type Props = {
  children: React.ReactNode,
}

export default Layout
