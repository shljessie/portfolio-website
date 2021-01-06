import { NEWS_CATEGORIES, NEWS_ITEMS, NewsItemProps } from "../constants/NewsData"

import React from "react"
import {Typography} from "@material-ui/core"
import { VerticalDelimiter } from "../components/Delimiters"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"

const NEWS_ITEM_BACKGROUND_COLOR = '#F5F5F5'	
export const NEWS_CATEGORY_COLOR = '#6F6F6F'	

const useStyles = makeStyles(theme => ({	
  bodyRoot: {	
    backgroundColor: '#fff',	
  },	
  newsItemSubtitle: {	
    display: 'flex',	
    alignItems: 'center',	
    color: NEWS_CATEGORY_COLOR,	
  },	
  newsCont: {	
    display: 'flex',	
    alignItems: 'flex-start',	
    flexWrap: 'wrap',	
    marginBottom: theme.spacing(10),	
  },	
  newsItem: {	
    backgroundColor: NEWS_ITEM_BACKGROUND_COLOR,	
    cursor: 'pointer',	
    '&:hover img': {	
      transform: 'scale(1.05)',	
    },	
    flex: 1,	
    minWidth: '280px',	
    maxWidth: '410px', 	
    height: '350px',	
    [theme.breakpoints.up('sm')]: {	
      height: '350px',	
    },	
    [theme.breakpoints.up('md')]: {	
      height: '350px',	
    },	
    boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)',	
    transition: 'transform 0.1s ease;',	
  },	
  newsItemImgCont: {	
    width: '100%',	
    height: '170px',	
    overflow: 'hidden',	
    display: 'flex',	
    justifyContent: 'center',	
    alignItems: 'center',	
  },	
  newsItemImg: {	
    width: 'auto',	
    height: '100%',	
    transform: 'scale(1)',	
    transition: 'transform .4s ease',	
  },	
  newsItemSubject: {	
    padding: theme.spacing(2, 3),	
    height: 'calc(100% - 200px)',	
  }	
}))	

type NewsProps = {	
  newsItemProps: NewsItemProps,	
}	

export const NewsItem = (props: NewsProps) => {	
  const { newsItemProps } = props	

  const {
    subject,	
    category,	
    date,	
    imgUrls,	
    summary	
  } = newsItemProps	

  const classes = useStyles()	

  return (	
    <div className={classes.newsItem}>	
        {	
          imgUrls.length > 0 &&	
          <div className={classes.newsItemImgCont}>	
            <img src={imgUrls[0]} className={classes.newsItemImg} alt='news_main_img'/>	
          </div>	
        }	
        <div className={classes.newsItemSubject}>	
          <div style={{overflow: 'hidden', width: '100%', height: '100%', color: '#000'}}>	
            <Typography variant='body2' style={{padding: theme.spacing(0, 0)}}>	
              <div className={classes.newsItemSubtitle}>	
                <div>{NEWS_CATEGORIES[category]}</div>	
                <VerticalDelimiter length='12px' thickness='1px' color={NEWS_CATEGORY_COLOR}/>	
                <div>{date}</div>	
              </div>	
            </Typography>	
            <Typography variant='h6' style={{ fontWeight: 700, padding: theme.spacing(1, 0)}}>	
              {subject}
            </Typography>	
            {	
              imgUrls.length === 0 && summary &&	
              <Typography variant='body2' style={{padding: theme.spacing(1, 0)}}>	
                {summary}	
              </Typography>	
            }	
          </div>	
        </div>	
    </div>	
  )	
}	