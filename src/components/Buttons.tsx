import {Button, Theme} from "@material-ui/core";
import {createStyles, withStyles} from "@material-ui/styles";

import React from "react";

export const HollowButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '77px',
      height: '29px',
      color: '#4923f4',
      border: `1px solid #4923f4`,
      borderRadius: '6px',
      padding: '10px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.1s',
      textTransform: 'none',
      fontFamily: 'Montserrat',

      backgroundColor: 'transparent',
      '&:hover': {
        boxShadow: `0 0 14px #4923f4`,
      },
    },
  })
)(Button);

export const EditorButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100px',
      height: '32px',
      color: '#fff',
      border: `1px solid #31343E`,
      borderRadius: '0px',
      padding: '10px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.1s',
      textTransform: 'none',
      fontFamily: 'Montserrat',

      backgroundColor: '#31343E',
      '&:hover': {
        boxShadow: `0 0 14px #31343E`,
        backgroundColor: '#31343E',
      },
    },
  })
)(Button);

const FilledButtonTemplate = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '77px',
      height: '29px',
      color: '#fff',
      border: `2px solid #4923f4`,
      borderRadius: '6px',
      padding: '10px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.1s',

      backgroundColor: '#4923f4',
      '&:hover': {
        backgroundColor: '#4923f4',
        boxShadow: `0 0 14px #4923f4`,
      },
    },
    disabled: {
      color: `#fff`,
      border: '2px solid #565656',
      background: `#4923f4`,
    }
  })
)(Button);

export const FilledButton = ({className, disabled, ...props}: any) => {

  return (
    <FilledButtonTemplate className={className} disabled={disabled} {...props} />
  )
}

export default FilledButton