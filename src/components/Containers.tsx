import { HEADER_HEIGHT, MAX_WIDTH } from "../constants/GlobalStyles"

import React from "react"
import { Typography } from "@material-ui/core"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"

const useStyles = makeStyles(theme => ({
  layoutRoot: {
    paddingTop: HEADER_HEIGHT
  },
  outerRoot: {
    display: 'flex',
    justifyContent: 'center',
  },
  innerRoot: {
    width:'100%',
    height:'100%',
    boxSizing: 'border-box',
    maxWidth: MAX_WIDTH.mobile,
    zIndex: 500,
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: MAX_WIDTH.tablet,
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 4),
      maxWidth: MAX_WIDTH.desktop,
    },
  },
  pageTitleCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '320px',
    [theme.breakpoints.up('sm')]: {
      height: '520px',
    },
    [theme.breakpoints.up('md')]: {
      height: '620px',
    },
  },
  title: {
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
}))

type DefaultProps = {
  children: React.ReactNode,
  className?: string,
  style?: any
}

export const LayoutRootCont = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
`

export const DefaultOuterRootCont = styled.div`
  display: flex;
  justify-content: center;
`

export const DefaultInnerRootCont = (props: DefaultProps) => {
  const classes = useStyles()
  const {children, className, style} = props

  return (
    <div className={clsx(classes.innerRoot, className)} style={style}>
      {children}
    </div>
  )
}

type PageTitleContProps = DefaultProps & {
}

export const PageTitleCont = (props: PageTitleContProps) => {
  const classes = useStyles()
  const { children } = props

  return (
    <div className={classes.pageTitleCont} style={{ backgroundColor: '#000' }}>
      <Typography variant='h1' className={classes.title} style={{ color:'#000' }}>
        {children}
      </Typography>
    </div>
  )
}

type DarkBackgroundProps = {
  color?: string
}

export const DarkOuterRootCont = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props: DarkBackgroundProps) => props.color ? props.color : '#000'};
  & * {
    color: #fff;
  }
`
