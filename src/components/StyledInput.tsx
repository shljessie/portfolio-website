import {createStyles, withStyles} from "@material-ui/styles";

import {TextField} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";
import styled from "styled-components";

const DefaultInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      textAlign: 'left',
      borderRadius: '4px',
      '& label.Mui-focused': {
        color: '#8687FF',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#8687FF',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: '#8687FF',
        },
        '&:hover fieldset': {
          borderColor: '#8687FF',
        },
        '& .Mui-focused fieldset': {
          borderColor: '#8687FF',
        },
      },
      '& .Mui-disabled': {
        color: '#8687FF',
      }
    },
  })
)(TextField);

export const StyledInput = styled(DefaultInput)`
  background: ${props => props.color ? props.color : '#11161C'};

  & input {
    -webkit-box-shadow: #8687FF;
    border-radius: 4px;
    -webkit-text-fill-color: #fff;
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
    background-color: #000;
    transition: background-color 5000s ease-in-out 0s;
    color: #8687FF;
  }
  
  & .MuiOutlinedInput-root {
    & fieldset {
      ${props => props.isNoBorder ? 'border: none !important;' : null}
    }
  }
`