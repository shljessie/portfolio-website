import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core"
import React, { useContext, useEffect, useState } from "react"

import { DefaultInnerRootCont } from "../components/Containers"
import { EDITOR_HEADER_HEIGHT } from "../constants/GlobalStyles"
import { EditorButton } from'../components/Buttons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    justifyContent: 'space-between',
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
    width: '220px'
  },
  rightCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
  margin-top: ${EDITOR_HEADER_HEIGHT}px;
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
    backgroundColorNormal: '#000',
    backgroundColorHover: '#000',
    navMenuBackgroundColor: '#000'
  }
}

const UserHeader = () => {

  const classes = useStyles();
  const { headerTheme } = useContext(ThemeContext);
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHeaderBackgroundTransparent, setIsHeaderBackgroundTransparent] = useState(true)
  const [open, setOpen] = React.useState(false);
  const [ratio, setRatio] = React.useState('');
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const theme = useTheme()
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRatio(event.target.value as string);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  
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
        <Typography variant="subtitle2" style={{color: 'white'}}>Home {'>'} English Chill {'>'} Separate</Typography>
                <div className={classes.cont}>
                    <div className={classes.rightCont}>
                      <EditorButton ref={anchorRef} onClick={handleToggle} className={classes.profileButton} aria-controls={open ? 'menu-list-grow' : undefined}
                      aria-haspopup="true">
                        <Typography variant="body2" style={{color: 'white'}}>
                         Ratio  
                        </Typography>
                        <ExpandMoreIcon style={{color: 'white'}}/>
                      </EditorButton>
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
                                <MenuItem onClick={handleClose} style={{color: 'white'}}>Landscape</MenuItem>
                                <MenuItem onClick={handleClose} style={{color: 'white'}}>Square</MenuItem>
                                <MenuItem onClick={handleClose} style={{color: 'white'}}> Portrait</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                      </Paper>
                      </Grow>
                        )}
                      </Popper>
                    </div>
          <EditorButton> 
            <Typography variant="body2" style={{color: 'white'}}>
              Create new
            </Typography>
          </EditorButton>
          </div>
      </DefaultInnerRootCont>
    </Root>
  )
}


export default UserHeader
