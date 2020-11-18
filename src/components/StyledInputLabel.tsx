import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  inputLabel: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.4)',
    marginBottom: '4px',
  },
}));

const StyledInputLabel = (props: Props) => {

  const { text } = props

  const classes = useStyles();

  return (
    <div className={classes.inputLabel}>
      { text }
    </div>
  )
}

type Props = {
  text: string
}

export default StyledInputLabel;
