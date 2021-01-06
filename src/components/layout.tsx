import "./layout.css"

import React , { useEffect, useState } from "react"

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { GENERAL_IMAGE_URLS } from "../constants/ImageUrls"
import { Z_INDEXES } from "../constants/GlobalStyles"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: '100vh',
    backgroundColor: "black",
  },
  backtotop:{
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }
  
}))

type BackToTopContProps = {
  isVisible: boolean
}

const BackToTop = styled.div`
  font-family: 'Lato';
  font-weight: 500;
  color: #A1A1A1;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 3px;
  padding: 6px;
`
const BackToTopImgCont = styled.div`
  -moz-animation: bounce 3s infinite;
  -webkit-animation: bounce 3s infinite;
  animation: bounce 3s infinite;
 @keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-15px);
  }
}
`

const BackToTopCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  transition: all .3s ease-in-out;
  visibility: ${ (props: BackToTopContProps) => props.isVisible ? 'visible' : 'hidden' };
  opacity: ${ (props: BackToTopContProps) => props.isVisible ? 1 : 0 };
  z-index: ${Z_INDEXES.scrollButton};
  width: 16px;
  height: auto;
  bottom: 60%;
  left: 90%;
  cursor: pointer;
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700&display=swap"
        />
                <link 
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap" rel="stylesheet"/>
        
        <div className={classes.main}>
          {children}
          <BackToTopCont
            onClick={scrollToTop}
            isVisible={isVisible}>
            <BackToTopImgCont>
              <ArrowUpwardIcon 
                style={{
                    color: '#A1A1A1', 
                    padding: '6px',
                    fontSize: 30,
                    }}/>
            </BackToTopImgCont>
            <BackToTop className={classes.backtotop}>
              BACK&nbsp;TO&nbsp;TOP
            </BackToTop>
          </BackToTopCont>
        </div>
      </>
  )
}

type Props = {
  children: React.ReactNode,
}

export default Layout
