import {
  ABOUT_US_TIMELINE_DATA,
  TimeLineDataProps
} from "../constants/PageData"
import { Typography, useMediaQuery } from "@material-ui/core"

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import theme from "../theme"

const TimeLineLeftPositionNonDesktop = '10%'
const TimeLineTextContWidthNonDesktop = '80%'
const TIMELINE_ITEM_HEIGHT = 200
const DOT_SIZE = 12

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  yearCont: {
    margin: theme.spacing(0.5, 2),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1, 4)
    },
  },
  timelineCont: {
    width: '100%',
    height: '50%',
    position: 'relative',
  },
  timelineTextCont: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2.5, 6),
    },
    textAlign: 'left'
  },
  mainImage: {
    width: '100%',
    height: 'auto',
  },
  mainSlogan: {
    margin: theme.spacing(20, 0),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(30, 0),
    },
  },
  historyContRoot: {
    padding: theme.spacing(4, 0),
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'left'
  },
  historyTitleCont: {
    marginTop: theme.spacing(4),
    width: '30%'
  },
  historyTableCont: {
    marginTop: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    borderBottom: '1px solid #6F6F6F'
  },
  historyItemRow: {
    display: 'flex',
    border: 'none',
    borderTop: '1px solid #6F6F6F',
    color: '#6F6F6F',
    flexDirection: 'column',
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      padding: theme.spacing(1),
      '& > p': {
        '&:nth-child(1)': {
          marginRight: '16px',
          width: '55%'
        },
        '&:nth-child(2)': {
          marginRight: '16px',
          width: '45%'
        }
      }
    },
  },
  history: {
    margin: theme.spacing(10, 0),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(20, 0),
    }
  }
}))


type YearCompProps = TimeLineSubCompProps & {
  isTop: boolean
}

const YearComp = styled.div`
  position: absolute;
  left: ${(props: YearCompProps) => props.isDesktop ? '50%' : TimeLineLeftPositionNonDesktop};
  top: ${(props: YearCompProps) => props.isTop ? '0' : '100%'};
  transform: translate(-50%, -50%);
  background-color: #000435;
  border-radius: 49px;
  color: #fff;
  z-index: 10;
`


type DotProps = TimeLineSubCompProps & {
  size: number,
  isLeft: boolean
}

const Dot = styled.span`
  position: absolute;
  left: calc(${(props: DotProps) => props.isDesktop && props.isLeft ? '100%' : '0px'} - ${(props: DotProps) => props.size / 2}px);
  top: calc(0px - ${(props: DotProps) => props.size / 2}px);
  height: ${(props: DotProps) => props.size}px;
  width: ${(props: DotProps) => props.size}px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
`

const DashedLine = styled.div`
  position: absolute;
  height: 100%;
  left: calc(${(props: TimeLineSubCompProps) => props.isDesktop ? '50%' : TimeLineLeftPositionNonDesktop} - 0.5px);
  display: inline-block;
  width: 1px;
  z-index: 1;
  
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 50%, #223049 50%);
    background-size: 100% 10px;
  }
`

type TimeLineSubCompProps = {
  isDesktop: boolean
}


type TimeLineItemRootProps = TimeLineSubCompProps & {
  isLeft?: boolean,
  index: number
}

const TimeLineItemRoot = styled.div`
  top: calc(100px + ${(props: TimeLineItemRootProps) => props.index * TIMELINE_ITEM_HEIGHT }px);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  position: absolute;
  left: ${(props: TimeLineItemRootProps) => !props.isDesktop ? TimeLineLeftPositionNonDesktop : props.isLeft ? '0' : '50%'};
  width: ${(props: TimeLineItemRootProps) => props.isDesktop ? '50%' : TimeLineTextContWidthNonDesktop }; 
`

type TimeLineItemProps = TimeLineDataProps & TimeLineSubCompProps & {
  index: number
}

const TimeLineItem = (props: TimeLineItemProps) => {

  const { month, title, isLeft, index, isDesktop } = props

  const classes = useStyles()

  return (
    <TimeLineItemRoot isLeft={isLeft} index={index} isDesktop={isDesktop}>
      <Dot isLeft={isLeft} size={DOT_SIZE} isDesktop={isDesktop}/>
      <div className={classes.timelineTextCont}>
        <Typography variant='body1' style={{ textTransform: 'uppercase' }}>
          { month }
        </Typography>
        <Typography variant='subtitle1' style={{ fontWeight: 700, marginTop: theme.spacing(0) }}>
          { title }
        </Typography>
      </div>
    </TimeLineItemRoot>
  )
  }
  
 const TimeLineCont = () => {

  const classes = useStyles()

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  return (
    <div className={classes.timelineCont}>
      {/*<DottedLine isDesktop={isDesktop}/>*/}
      <DashedLine isDesktop={isDesktop}>
        <div/>
      </DashedLine>
      {
        ABOUT_US_TIMELINE_DATA.map((data, i) => (
          <TimeLineItem isLeft={data.isLeft} month={data.month} title={data.title} index={i} isDesktop={isDesktop}/>
        ))
      }
    </div>
  )
}

export default TimeLineCont;