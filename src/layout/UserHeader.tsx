import {
  ClickAwayListener,
  Grow,
  IconButton,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  makeStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core"
import { EDITOR_HEADER_HEIGHT, SIDE_MENU_PADDING_RIGHT } from "../constants/GlobalStyles"
import React, { useContext, useEffect, useState } from "react"

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BurgerMenu from "../components/BurgerMenu"
import { DefaultInnerRootCont } from "../components/Containers"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {HEADER_IMAGE_URL} from "../constants/ImageUrls";
import { HEADER_NAV_LINK_ITEMS } from "../constants/Links"
import { Modal } from "../components/Modal"
import { Link as RouterLink } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings';
import SideMenu from "../components/SideMenu"
import { ThemeContext } from "../context/ThemeContext"
import styled from "styled-components"
import { useHistory } from "react-router-dom";

const HEADER_OPACITY_SWITCH_HEIGHT = 160

const useStyles = makeStyles(theme => ({
  inner: {
    height: EDITOR_HEADER_HEIGHT,
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
  profileButton: {
    margin: theme.spacing(0)
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
  cont: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rightCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
  height: ${EDITOR_HEADER_HEIGHT}px;
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
    navMenuBackgroundColor: '#31343E'
  },
  dark: {
    fontColor: '#fff',
    barColor: '#fff',
    backgroundColorNormal: '#31343E',
    backgroundColorHover: '#31343E',
    navMenuBackgroundColor: '#31343E'
  }
}

const UserHeader = () => {


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const history = useHistory();

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
              <img className={classes.logo} src={HEADER_IMAGE_URL.logo} alt='header_logo' />
            </a>

            <div className={classes.navCont}>
              {
                !isDesktop
                  ? <>
                  <MobileMenuButton>
                    <BurgerMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
                  </MobileMenuButton>
                  <SideMenu isSideMenuOpen={isSideMenuOpen} items={HEADER_NAV_LINK_ITEMS} />
                
                  </>
                  :
                  <>
                  <div className={classes.cont}>
                    <div className={classes.rightCont}>
                      <IconButton ref={anchorRef} onClick={handleToggle} className={classes.profileButton} aria-controls={open ? 'menu-list-grow' : undefined}
                      aria-haspopup="true">
                        <AccountCircleIcon style= {{color: 'white', fontSize: "40"}}/>
                      </IconButton>
                      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose} style={{color: 'white'}}>hjkim@cochlear.ai</MenuItem>
                              <Link component={RouterLink} to="/account" > 
                                <MenuItem onClick={handleClose} style={{color: 'white'}}><SettingsIcon style={{color: 'white'}}/> User settings</MenuItem>
                              </Link>
                              <MenuItem onClick={handleClose} style={{color: 'white'}}><ExitToAppIcon style={{color: 'white'}}/> Logout</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                      </Paper>
                      </Grow>
                        )}
                      </Popper>
                    </div>
                  </div>
                </>
              }
              <Modal isSideMenuOpen={isSideMenuOpen} onClick={() => setIsSideMenuOpen(false)}/>
            </div>
          </DefaultInnerRootCont>
    </Root>
  )
}


export default UserHeader
