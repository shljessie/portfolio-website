import {FilledButton, HollowButton} from '../components/Buttons'
import React, { useState } from "react"
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core"

import BurgerMenu from "../components/BurgerMenu"
import { DefaultInnerRootCont } from "../components/Containers"
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import {HEADER_IMAGE_URL} from "../constants/ImageUrls";
import { HEADER_NAV_LINK_ITEMS } from "../constants/Links"
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal"
import SideMenu from "../components/SideMenu"
import styled from "styled-components"

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
  buttonCont: {
    alignItems: 'center',
    lineHeight: '44px',
    display: 'flex',
    justifyContent: 'space-between',
    width:'170px'
  },
}))

const Root = styled.div`
  position: fixed;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
  z-index: 1000;
  transition: background-color .25s ease-in-out 0s;
  background-color: #121212;
`

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const isDesktop = useMediaQuery(theme.breakpoints.up(1080), {
    defaultMatches: true
  })

  return (
    <Root>
      <DefaultInnerRootCont className={classes.inner}>
            <div>
              <a href='/'>
                <img className={classes.logo} src={HEADER_IMAGE_URL.logo} alt='header_logo' />
              </a>
            </div>
              {
                !isDesktop
                  ? 
                  <>
                    <BurgerMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
                    <SideMenu isSideMenuOpen={isSideMenuOpen} items={HEADER_NAV_LINK_ITEMS} />
                  </>
                  :
                  <>
                  <div className={classes.buttonCont}>
                      <Link to="/Login" style={{textDecoration: 'none'}}>
                        <HollowButton>
                          Log in 
                        </HollowButton>
                      </Link>
                      <Link to="/TryFree" style={{textDecoration: 'none'}}>
                        <FilledButton> 
                          Tutorial 
                        </FilledButton>
                      </Link>
                  </div>
                </>
              }
              <Modal isSideMenuOpen={isSideMenuOpen} onClick={() => setIsSideMenuOpen(false)}/>
      </DefaultInnerRootCont>
    </Root>
  )
}

export default Header
