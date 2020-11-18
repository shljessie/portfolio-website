import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {IMG_URL_PREFIX} from "../SignInV2";

const useStyles = makeStyles(theme => ({
  snsCont: {
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    margin: theme.spacing(2, 0, 1)
  },
  snsIcon: {
    height: '34px',
    margin: theme.spacing(0, 1.2)
  },
}))

export const SnsCont = (props: Props) => {

  const {} = props

  const classes = useStyles()

  return (
    <div className={classes.snsCont}>
      <a href='https://www.facebook.com/cochlearai' target='_blank'>
        <img src={IMG_URL_PREFIX + '/facebook.png'} alt='facebook_link' className={classes.snsIcon} />
      </a>
      <a href='https://www.linkedin.com/company/cochlear.ai/' target='_blank'>
        <img src={IMG_URL_PREFIX + '/linkedin.png'} alt='linkedin_link' className={classes.snsIcon} />
      </a>
      <a href='/' target='_blank'>
        <img src={IMG_URL_PREFIX + '/twitter.png'} alt='twitter_link' className={classes.snsIcon} />
      </a>
      <a href='https://www.instagram.com/cochl_/' target='_blank'>
        <img src={IMG_URL_PREFIX + '/instagram.png'} alt='instagram_link' className={classes.snsIcon} />
      </a>
    </div>
  )
}

type Props = {}