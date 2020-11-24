import {FilledButton, HollowButton} from '../components/Buttons'
import { HEADER_HEIGHT, SIDE_MENU_PADDING_RIGHT } from "../constants/GlobalStyles"
import React, { useContext, useEffect, useState } from "react"
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core"

import BurgerMenu from "../components/BurgerMenu"
import { DefaultInnerRootCont } from "../components/Containers"
import {HEADER_IMAGE_URLS} from "../constants/ImageUrls";
import { HEADER_NAV_LINK_ITEMS } from "../constants/Links"
import {
  Link,
} from "react-router-dom";
import { Modal } from "../components/Modal"
import SideMenu from "../components/SideMenu"
import { ThemeContext } from "../context/ThemeContext"
import styled from "styled-components"

const HEADER_OPACITY_SWITCH_HEIGHT = 160

const useStyles = makeStyles(theme => ({
  inner: {
    height: HEADER_HEIGHT,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
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
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
  z-index: 1000;
  transition: background-color .25s ease-in-out 0s;
  // transform: ${(props: HeaderProps) => props.isHeaderBackgroundTransparent ? 'translate3d(0,0,0)' : 'translateY(-100%)'};
  // opacity: ${(props: HeaderProps) => props.isHeaderBackgroundTransparent ? 1 : 0};
  background-color: ${(props: HeaderProps) => props.isHeaderBackgroundTransparent ? props.backgroundColorHover : props.backgroundColorNormal};
`

const ButtonContainer = styled.div`
  align-items:'flex-end';
`

const BURGER_MENU_BUTTON_SIZE = '24px'
const MobileMenuButton = styled.div`
  padding: 4px;
  position: absolute;
  display: block;
  top: 50%;
  right: ${ SIDE_MENU_PADDING_RIGHT }px;
  width: ${ BURGER_MENU_BUTTON_SIZE };
  height: ${ BURGER_MENU_BUTTON_SIZE };
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 55;
  border: 0;
  -webkit-transition: opacity .2s linear .1s;
  transition: opacity .2s linear .1s;
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
    backgroundColorNormal: '#000',
    backgroundColorHover: '#000',
    navMenuBackgroundColor: '#000'
  }
}

const Header = (props: Props) => {
  const {} = props

  const classes = useStyles()

  const { headerTheme } = useContext(ThemeContext);

  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHeaderBackgroundTransparent, setIsHeaderBackgroundTransparent] = useState(true)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const theme = useTheme()

  const isDesktop = useMediaQuery(theme.breakpoints.up(1080), {
    defaultMatches: true
  })

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [])

  useEffect(() => {
    const shouldBeTransparent = scrollPosition <= HEADER_OPACITY_SWITCH_HEIGHT

    if (shouldBeTransparent && !isHeaderBackgroundTransparent) {
      setIsHeaderBackgroundTransparent(true)

    } else if (!shouldBeTransparent && isHeaderBackgroundTransparent) {
      setIsHeaderBackgroundTransparent(false)
    }
  }, [scrollPosition])

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
              <img className={classes.logo} src={HEADER_IMAGE_URLS[headerTheme].logo} alt='header_logo' />
            </a>

            <div className={classes.navCont}>
              {
                !isDesktop
                //on mobile tablet
                  ? <>
                  <MobileMenuButton>
                    <BurgerMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
                  </MobileMenuButton>
                  <SideMenu isSideMenuOpen={isSideMenuOpen} items={HEADER_NAV_LINK_ITEMS} />
                
                  </>
                  : //when desktop
                  <>
                   <ButtonContainer>
                      <Link to="/Login" style={{textDecoration: 'none'}}>
                        <HollowButton style={{color:'#8687FF', fontWeight: '500', fontFamily:'Lato'}}>
                          Log in 
                        </HollowButton>
                      </Link>
                      <Link to="/Tutorial" style={{textDecoration: 'none'}}>
                        <FilledButton style={{  margin: '23px', fontFamily:'Lato'}}> 
                          Tutorial 
                        </FilledButton>
                      </Link>
                  </ButtonContainer>
                </>
              }
              <Modal isSideMenuOpen={isSideMenuOpen} onClick={() => setIsSideMenuOpen(false)}/>
            </div>
          </DefaultInnerRootCont>
    </Root>
  )
}

type Props = {
}

export default Header
