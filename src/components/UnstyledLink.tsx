import { Theme, Typography } from "@material-ui/core"

import { LINK_HOVER_COLOR } from "../theme/palette"
import { Link } from "@reach/router"
import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  navTextCont: {
    fontFamily:'Lato',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0.5),
    margin: '0px, 4px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
}))

const useLinkStyles = makeStyles<Theme, Props>(theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    opacity: 1,
    transition: 'color .1s ease',
    '&:hover': {
      color: ({hoverColor}) => hoverColor || LINK_HOVER_COLOR,
      // opacity: 0.7
    }
  },
}))

type NavTextItemProps = {
  children: React.ReactNode,
  height: string | number,
  variant: "inherit" | "button" | "overline" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "srOnly" | undefined
  className?: any
  color?: string,
}

export const NavTextItem = (props: NavTextItemProps) => {
  const classes = useStyles(props)
  const { children, height, className, color, variant } = props

  return (
    <Typography variant={variant} className={clsx(classes.navTextCont, className || {})} style={{height: height, color: color || 'inherit' }}>
      {children}
    </Typography>
  )
}

export const UnstyledLink = (props: Props) => {
  const classes = useLinkStyles(props)

  const { name, href, className, variant, height, color, isExternalLink } = props

  return (
    href
      ?
      isExternalLink
        ? <a href={href} className={classes.link} target='_blank'>
          <NavTextItem height={height || 'auto'} variant={variant} className={className} color={color}>
            {name}
          </NavTextItem>
        </a>
        : <Link to={href} className={classes.link}>
          <NavTextItem height={height || 'auto'} variant={variant} className={className} color={color}>
            {name}
          </NavTextItem>
        </Link>
      : <NavTextItem height={height || 'auto'} variant={variant} className={className} color={color}>
        {name}
      </NavTextItem>
  )
}

type Props = {
  name: string,
  variant: "inherit" | "button" | "overline" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "srOnly" | undefined
  height?: string | number,
  href?: string,
  hoverColor?: string
  className?: any,
  color?: string,
  isExternalLink?: boolean,
}

export default UnstyledLink
