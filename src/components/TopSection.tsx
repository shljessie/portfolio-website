import React, { useContext, useEffect, useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { DefaultInnerRootCont } from "../components/Containers"
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import {HEADER_IMAGE_URL} from "../constants/ImageUrls";
import { ThemeContext } from "../context/ThemeContext"
import styled from "styled-components"

const useStyles = makeStyles(theme => ({
  inner: {
    marginTop: theme.spacing(3)
  },
  logo: {
    justifyContent:'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: '24px',
    width: 'auto',
    margin: 0
  },
  navCont: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(14),
    '& div': {
      lineHeight: '44px',
    }
  },
  navMenuRoot: {
    '&:hover #navMenu': {
      visibility: 'visible',
      transform: 'translateY(0px)',
      opacity: 1
    }
  },
  navMenuRelative: {
    position: 'relative',
    zIndex: 1,
  },
  subMenuName: {
    height: 'auto',
    display: 'flex',
    // padding: theme.spacing(0.5),
    justifyContent: 'space-between',
    '&:hover + div': {
      transform: 'translateX(100%)',
    },
  },
  divider: {
    height: 'inherit',
    marginRight: theme.spacing(3),
    borderRight: '2px solid black',
  },
  mobileHeader: {
    width: '100%',
    boxSizing: 'border-box',
    zIndex: 500,
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.up('md')]: {
    },
  },
}))


export type HeaderThemeType = 'light' | 'dark'

type HeaderProps = {
  isHeaderBackgroundTransparent: boolean,
  backgroundColorNormal: string,
  backgroundColorHover: string
}

const Root = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
  z-index: 1000;
  transition: background-color .25s ease-in-out 0s;
  // transform: ${(props: HeaderProps) => props.isHeaderBackgroundTransparent ? 'translate3d(0,0,0)' : 'translateY(-100%)'};
  // opacity: ${(props: HeaderProps) => props.isHeaderBackgroundTransparent ? 1 : 0};
  background-color: ${(props: HeaderProps) => props.isHeaderBackgroundTransparent ? props.backgroundColorHover : props.backgroundColorNormal};
`


type HeaderComponentThemeColorProps = {
  fontColor: string,
  barColor: string,
  backgroundColorNormal: string,
  backgroundColorHover: string,
  navMenuBackgroundColor: string
}

export const HEADER_COMPONENT_THEME_COLORS: {[key: string]: HeaderComponentThemeColorProps} = {
  light: {
    fontColor: '#fff',
    barColor: '#fff',
    backgroundColorNormal: 'rgba(255, 255, 255, 1)',
    backgroundColorHover: 'rgba(255, 255, 255, 0)',
    navMenuBackgroundColor: '#fff'
  },
  dark: {
    fontColor: '#fff',
    barColor: '#fff',
    backgroundColorNormal: ' #31343E',
    backgroundColorHover: ' #31343E',
    navMenuBackgroundColor: '#000'
  }
}

const TopSection= (props: Props) => {
  const {} = props

  const classes = useStyles()

  const { headerTheme } = useContext(ThemeContext);

  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHeaderBackgroundTransparent, setIsHeaderBackgroundTransparent] = useState(true)



  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [])


  function onScroll() {
    setScrollPosition(window.pageYOffset)
  }

  return (
    <Root
      isHeaderBackgroundTransparent={isHeaderBackgroundTransparent}
      backgroundColorNormal={HEADER_COMPONENT_THEME_COLORS[headerTheme].backgroundColorNormal}
      backgroundColorHover={HEADER_COMPONENT_THEME_COLORS[headerTheme].backgroundColorHover}
    >
      <DefaultInnerRootCont className={classes.inner}>
            <a href='/'>
              <img className={classes.logo} src={HEADER_IMAGE_URL.logo} alt='header_logo' />
            </a>

          </DefaultInnerRootCont>
    </Root>
  )
}

type Props = {
}

export default TopSection
