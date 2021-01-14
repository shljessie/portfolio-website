import * as React from 'react'

import { FOOTER_NAV_LINK_ITEMS, NavLinkItem } from "../constants/Links"

import { DefaultInnerRootCont } from "../components/Containers"
import { LINK_HOVER_COLOR } from "../theme/palette"
import { Typography } from "@material-ui/core"
import UnstyledLink from "../components/UnstyledLink"
import { VerticalDelimiter } from "../components/Delimiters"
import github from '../images/github.png'
import linkedin from'../images/linkedin.png'
import {makeStyles} from "@material-ui/core/styles";
import medium from '../images/medium.png'
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: theme.spacing(8, 0),
  },
  topRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(9),
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
    height: 'auto',
    width: '26px',
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
    width: '150px',
    justifyContent: 'space-between'
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
    maxWidth: '340px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'space-between',
    justifyContent: 'flex-start',
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
}))

type SnsLinkProps = {
  href: string,
  src: string,
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

type UnstyledExternalLinkProps = {
  href: string,
  name: string
}

const UnstyledExternalLink = (props: UnstyledExternalLinkProps) => {
  const classes = useStyles()

  return (
    <a href={props.href} className={classes.unstyledExternalLink}>
      <Typography variant='body2'>
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
    <div>
      <Typography variant='body1' style={{ color: '#fff', padding: theme.spacing(0.5), fontWeight: 700, textAlign: 'start' }}>
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
                height='30px'
                hoverColor={'#6D33F1'}
              />
            )
          })
        }
      </div>
    </div>
  )
}

const BottomRow = () => {
  const classes = useStyles()

  return (
    <div className={classes.bottomRow}>
      <div className={classes.flexWrapper}>
        <div style={{display: 'flex', alignItems: 'center', marginRight: theme.spacing(5)}}>
          <Typography variant='body2' style={{color: '#fff'}}>
            &copy; 2020 Jessie Lee
          </Typography>
        </div>
        <div className={classes.termsCont}>
          <UnstyledExternalLink href='https://docs.google.com/document/d/1QFNgcO9zj-Xf6fsRxyjCGN0nNiHyRKlDmDp75iOOtJo/edit' name='Resume'/>
          <VerticalDelimiter color='#fff' length='20px'/>
          <UnstyledExternalLink href='/terms' name='Frequently asked Questions'/>
          <VerticalDelimiter color='#fff' length='20px'/>
          <UnstyledExternalLink href="mailto: sl994@cornell.edu" name='sl994@cornell.edu'/>
        </div>
      </div>
      <div className={classes.snsCont}>
        <SnsLink href={'https://www.linkedin.com/in/jessie-l-3a188519b/'} src={linkedin} alt='linkedin_logo'/>
        <SnsLink href={'https://github.com/shljessie'} src={github} alt='github_logo'/>
        <SnsLink href={'https://medium.com/@jessielee.shl'} src={medium} alt='medium_logo'/>
      </div>
    </div>
  )
}

const Footer = (props: Props) => {
  const {} = props

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DefaultInnerRootCont>
        <div className={classes.topRow}>
            <Typography variant="h6">Jessie Lee</Typography>
        </div>
        <BottomRow/>
      </DefaultInnerRootCont>
    </div>
  )
}

type Props = {}

export default Footer
