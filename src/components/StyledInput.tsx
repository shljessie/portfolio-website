import {createStyles, withStyles} from "@material-ui/styles";

import {TextField} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";
import {dialog} from "../theme/palette";
import styled from "styled-components";

const DefaultInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      textAlign: 'left',
      borderRadius: '4px',
      '& label.Mui-focused': {
        color: theme.palette.primary.main,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.main,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          // border color
          border: '1px solid rgba(255, 255, 255, 1)',
        },
        '&:hover fieldset': {
          borderColor: 'none',
        },
        '& .Mui-focused fieldset': {
          borderColor: theme.palette.primary.main,
        },
      },
      '& .Mui-disabled': {
        color: theme.palette.action.disabled,
      }
    },
  })
)(TextField);

export const StyledInput = styled(DefaultInput)`
  // Commenting below allows safari contact info auto complete button color to be white not black.
  background: ${props => props.color ? props.color : dialog};
  
  & input {
    // This is workaround to changing background color when Chrome's autofill because
    // Chrome doesnt support css rule.
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.color ? props.color : dialog} inset !important;
    border-radius: 4px;
    -webkit-text-fill-color: #fff !important;
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
    background-color: ${props => props.color ? props.color : dialog} !important;
    transition: background-color 5000s ease-in-out 0s;
    // border: 1px solid rgba(255, 255, 255, 1);
    color: rgb(255, 255, 255) !important;
  }
  
  & .MuiOutlinedInput-root {
    & fieldset {
      ${props => props.isNoBorder ? 'border: none !important;' : null}
    }
  }
`