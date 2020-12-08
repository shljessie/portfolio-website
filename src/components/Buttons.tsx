import {Button, Theme} from "@material-ui/core";
import {createStyles, withStyles} from "@material-ui/styles";

import React from "react";

export const HollowButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '77px',
      height: '29px',
      color: '#8687FF',
      border: `1px solid #8687FF`,
      borderRadius: '6px',
      padding: '10px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.1s',
      textTransform: 'none',
      fontFamily: 'Montserrat',

      backgroundColor: 'transparent',
      '&:hover': {
        boxShadow: `0 0 14px #8687FF`,
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
      border: `2px solid #8687FF`,
      borderRadius: '6px',
      padding: '10px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.1s',

      backgroundColor: '#8687FF',
      '&:hover': {
        backgroundColor: '#8687FF',
        boxShadow: `0 0 14px #8687FF`,
      },
    },
    disabled: {
      color: `#fff`,
      border: '2px solid #565656',
      background: `#8687FF`,
    }
  })
)(Button);

export const FilledButton = ({className, disabled, ...props}: any) => {

  return (
    <FilledButtonTemplate className={className} disabled={disabled} {...props} />
  )
}

export default FilledButton