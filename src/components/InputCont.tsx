import {Theme, createStyles, fade, makeStyles, withStyles} from "@material-ui/core/styles";

import FormControl from '@material-ui/core/FormControl';
import {InputAdornment} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import React from "react";
import {StyledInput} from "./StyledInput";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  inputCont: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  inputLabel: {
    display: 'block',
    fontSize: '12px',
    textAlign:'start'
  },
  input: {
    display: 'block',
    padding: theme.spacing(0.5),
  },
  inputIcon: {
    height: '26px',
  },
  optionalText: {
    fontSize: '12px',
    fontStyle: 'italic',
    display: 'inline-block',
    marginLeft: theme.spacing(0.5)
  }
}))

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #8687FF',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade('#8687FF', 0.25)} 0 0 0 0.2rem`,
        borderColor: '#8687FF',
      },
    },
  }),
)(InputBase);

export const InputCont = (props: Props) => {
  const {
    label, name, value, handleChange, type,
    inputIconComp, isError, helperText, size, color,
    style, className, disableAutofill, isOptional
  } = props

  const classes = useStyles()

  return (
    <div className={clsx(className, classes.inputCont)} style={style} >
      <div className={classes.inputLabel}>{label}{isOptional ? <div className={classes.optionalText}>optional</div> : null}</div>
      <StyledInput
        autoFocus
        size={size || 'small'}
        name={name}
        type={type || null}
        variant='outlined'
        fullWidth
        value={value}
        onChange={handleChange}
        className={classes.input}
        color={color}
        InputProps={
          inputIconComp
            ? {
              startAdornment: (
                <InputAdornment position="start" style={{color:'#8687FF'}}>
                  {inputIconComp}
                </InputAdornment>
              ),
              style: {
                "&:-webkit-autofill": {
                  WebkitBoxShadow: `#8687FF`
                }
              }
            }
            : {
              style: {
                "&:-webkit-autofill": {
                  WebkitBoxShadow: `#8687FF`
                }
              }
            }
        }
        error={isError}
        helperText={helperText}

        autoComplete={disableAutofill ? 'new-password' : null} 
      />
    </div>
  )
}

type Props = {
  label: string,
  name: string,
  value: string,
  handleChange: any,
  type?: string,
  inputIconComp?: React.ReactNode,
  isError?: boolean,
  helperText?: string,
  size?: string,
  color?: string,
  style?: {},
  className?: {},
  disableAutofill?: boolean,
  isOptional?: boolean
}