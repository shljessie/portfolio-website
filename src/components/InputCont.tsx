import {InputAdornment} from "@material-ui/core";
import React from "react";
import {StyledInput} from "./StyledInput";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inputCont: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputLabel: {
    display: 'block',
    fontSize: '12px',
    color:'white',
    textAlign: 'start',
    marginBottom: theme.spacing(1)
  },
  input: {
    display: 'block',
    paddingTop: theme.spacing(1.5),
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
        variant='filled'
        fullWidth
        value={value}
        onChange={handleChange}
        className={classes.input}
        color={color}
        InputProps={
          inputIconComp
            ? {
              startAdornment: (
                <InputAdornment position="start">
                  {inputIconComp}
                </InputAdornment>
              ),
              style: {
                "&:-webkit-autofill": {
                  WebkitBoxShadow: `0 0 0 1000px ${color ? color : '#11161C'} inset`
                }
              }
            }
            : {
              style: {
                "&:-webkit-autofill": {
                  WebkitBoxShadow: `0 0 0 1000px ${color ? color : '#11161C'} inset`
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