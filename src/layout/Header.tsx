import {FilledButton, HollowButton} from '../components/Buttons'
import React, { useState } from "react"
import {Typography, makeStyles, useMediaQuery, useTheme} from "@material-ui/core"

import BurgerMenu from "../components/BurgerMenu"
import { DefaultInnerRootCont } from "../components/Containers"
import { FOOTER_IMAGE_URLS } from "../constants/ImageUrls"
import { HEADER_HEIGHT } from "../constants/GlobalStyles"
import {HEADER_IMAGE_URL} from "../constants/ImageUrls";
import { HEADER_NAV_LINK_ITEMS } from "../constants/Links"
import { LINK_HOVER_COLOR } from "../theme/palette"
import { Link } from "react-router-dom";
import MailSharpIcon from '@material-ui/icons/MailSharp';
import { Modal } from "../components/Modal"
import { SNS_LINKS } from "../constants/Urls"
import SideMenu from "../components/SideMenu"
import github from '../images/github.png'
import linkedin from'../images/linkedin.png'
import medium from '../images/medium.png'
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
    height: 'auto',
    width: 'auto',
    marginTop: '5px'
  },
  buttonCont: {
    alignItems: 'center',
    lineHeight: '44px',
    display: 'flex',
    justifyContent: 'space-between',
    width:'170px'
  },
  snsLink: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    '&:hover': {
      '& img': {
        transform: 'scale(1.2)',
      }
    }
  },
  snsLogo: {
    height: 'auto',
    width: '26px',
    scale: 1,
    transition: 'transform 0.15s ease-in-out 0s',
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
  background-color: 'white';
`

type SnsLinkProps = {
  href: any,
  src: any,
  alt: string
}

const SnsLink = (props: SnsLinkProps) => {
  const classes = useStyles()

  return (
    <a className={classes.snsLink} href={props.href}  target='_blank'>
      <img src={props.src} alt={props.alt} className={classes.snsLogo} />
    </a>
  )
}

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
              <a href='/' style={{textDecoration: 'none', color: '#4923f4', fontSize: 20}}>
               <Typography variant="subtitle2" >Jessie Lee</Typography>
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
                  <SnsLink href={'https://www.linkedin.com/in/jessie-l-3a188519b/'} src={linkedin} alt='linkedin_logo'/>
                  <SnsLink href={'https://github.com/shljessie'} src={github} alt='github_logo'/>
                  <Typography variant="body2" style={{color: 'white', marginLeft: '10px'}}>
                    <a href="mailto: sl994@cornell.edu" style={{textDecoration: 'none', color: 'white'}}>sl994@cornell.edu</a>
                  </Typography>
                  </div>
                </>
              }
              <Modal isSideMenuOpen={isSideMenuOpen} onClick={() => setIsSideMenuOpen(false)}/>
      </DefaultInnerRootCont>
    </Root>
  )
}

export default Header
