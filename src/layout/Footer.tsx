import * as React from 'react'

import { FOOTER_NAV_LINK_ITEMS, NavLinkItem } from "../constants/Links"

import { DefaultInnerRootCont } from "../components/Containers"
import { FOOTER_IMAGE_URLS } from "../constants/ImageUrls"
import { LINK_HOVER_COLOR } from "../theme/palette"
import { SNS_LINKS } from "../constants/Urls"
import { ThemeProvider } from 'styled-components'
import { Typography } from "@material-ui/core"
import UnstyledLink from "../components/UnstyledLink"
import { VerticalDelimiter } from "../components/Delimiters"
import {makeStyles} from "@material-ui/core/styles";
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#000',
    justifyContent:'center',
    fontFamily: 'Lato',
    color: '#fff',
    padding: theme.spacing(8, 0)
  },
  topRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // [theme.breakpoints.up('sm')]: {
    // },
    [theme.breakpoints.up('md')]: {
      flexWrap: 'unset',
    },
  },
  logo: {
    cursor: 'pointer',
    height: '24px',
    width: 'auto',
    margin: 0
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
    height: '26px',
    width: 'auto',
    scale: 1,
    transition: 'transform 0.15s ease-in-out 0s',
  },
  bottomRow: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  termsCont: {
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
  },
  flexWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap-reverse',
    height: 'auto',
    marginRight: theme.spacing(4),
    '& div': {
      height: '42px',
      lineHeight: '30px',
    },
    [theme.breakpoints.up('md')]: {
      flexWrap: 'unset'
    },
  },
  snsCont: {
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    width: '220px',
    justifyContent: 'space-between'
    // margin: theme.spacing(2, 0, 1)
  },
  unstyledExternalLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-block',
    opacity: 1,
    textAlign: 'center',
    '&:hover': {
      color: LINK_HOVER_COLOR,
    },
    transition: 'color .1s ease',
  },
  navMenuCont: {
    width: '100%',
    maxWidth: '640px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(2),
    height: '420px',
    [theme.breakpoints.up('sm')]: {
      height: '340px'
    },
    [theme.breakpoints.up(700)]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 'unset',
    }
  },
  navMenuUnit: {
    marginTop: theme.spacing(2),

  }
}))

type SnsLinkProps = {
  href: string,
  src: string,
  alt: string
}

const SnsLink = (props: SnsLinkProps) => {
  const classes = useStyles()

  return (
    <a className={classes.snsLink} href={props.href} target='_blank'>
      <img src={props.src} alt={props.alt} className={classes.snsLogo} />
    </a>
  )
}

type UnstyledExternalLinkProps = {
  href: string,
  name: string
}

const UnstyledExternalLink = (props: UnstyledExternalLinkProps) => {
  const classes = useStyles()

  return (
    <a href={props.href} className={classes.unstyledExternalLink}>
      <Typography variant='body2' style= {{fontFamily: 'Lato'}}>
        {props.name}
      </Typography>
    </a>
  )
}

type NaveMenuCategoryContProps = {
  navLinkItem: NavLinkItem
}

const NavMenuCategoryCont = ({ navLinkItem }: NaveMenuCategoryContProps) => {
  const classes = useStyles()

  return (
    <div className={classes.navMenuUnit}>
      <Typography variant='body1' style={{ color: '#fff', padding: '4px', fontWeight: 700, textAlign: 'start'}}>
        {navLinkItem.name}
      </Typography>
      <div style={{margin: theme.spacing(1.5, 0), textAlign: 'start'}}>
        {
          navLinkItem.items && navLinkItem.items.map((subItem, i) => {
            return (
              <UnstyledLink
                key={i}
                name={subItem.name}
                href={subItem.url}
                isExternalLink={subItem.isExternalLink}
                variant='body2'
                height='24px'
              />
            )
          })
        }
      </div>
    </div>
  )
}

const NavMenuCont = () => {
  const classes = useStyles()

  return (
    <div className={classes.navMenuCont}>
      {
        FOOTER_NAV_LINK_ITEMS.map((navLinkItem, i) => {
          return <NavMenuCategoryCont key={i} navLinkItem={navLinkItem}/>
        })
      }
    </div>
  )
}

const BottomRow = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.bottomRow}>
      <div className={classes.flexWrapper}>
        <div style={{display: 'flex', alignItems: 'center', marginRight: theme.spacing(5)}}>
          <Typography variant='body2' style={{color: '#fff'}}>
            @ 2020 Cochlear.ai
          </Typography>
        </div>
        <div className={classes.termsCont}>
          <UnstyledExternalLink href='' name='Cookie Settings'/>
          <VerticalDelimiter color='#fff' length='20px'/>
          <UnstyledExternalLink href='' name='Terms of Service'/>
          <VerticalDelimiter color='#fff' length='20px'/>
          <UnstyledExternalLink href='' name='Privacy  Policy'/>
        </div>
      </div>
      <div className={classes.snsCont}>
      <SnsLink href={SNS_LINKS.facebook} src={FOOTER_IMAGE_URLS.sns.facebook} alt='facebook_logo'/>
        <SnsLink href={SNS_LINKS.facebook} src={FOOTER_IMAGE_URLS.sns.facebook} alt='facebook_logo'/>
        <SnsLink href={SNS_LINKS.twitter} src={FOOTER_IMAGE_URLS.sns.twitter} alt='twitter_logo'/>
        <SnsLink href={SNS_LINKS.linkedIn} src={FOOTER_IMAGE_URLS.sns.linkedIn} alt='linkedin_logo'/>
        <SnsLink href={SNS_LINKS.github} src={FOOTER_IMAGE_URLS.sns.github} alt='github_logo'/>
        <SnsLink href={SNS_LINKS.instagram} src={FOOTER_IMAGE_URLS.sns.instagram} alt='instagram_logo'/>
      </div>
    </div>
  </ThemeProvider>
  )
}

const Footer = (props: Props) => {
  const {} = props

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DefaultInnerRootCont>
        <div className={classes.topRow}>
          <img className={classes.logo} src={FOOTER_IMAGE_URLS.logo} alt='footer_logo' />
          <NavMenuCont/>
        </div>
        <BottomRow/>
      </DefaultInnerRootCont>
    </div>
  )
}

type Props = {}

export default Footer
