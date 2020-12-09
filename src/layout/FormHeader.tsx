import { DefaultInnerRootCont } from "../components/Containers"
import {LOGIN_HEADER_IMAGE_URL} from "../constants/ImageUrls";
import React  from "react"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"

const useStyles = makeStyles(theme => ({
  inner: {
    marginTop: theme.spacing(3)
  },
  logo: {
    justifyContent:'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'auto',
    margin: 0
  },
}))

const Root = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
  z-index: 1000;
  transition: background-color .25s ease-in-out 0s;
  background-color: #31343E;
`

const FormHeader= () => {
  const classes = useStyles()

  return (
    <Root>
      <DefaultInnerRootCont className={classes.inner}>
        <a href='/'>
          <img className={classes.logo} src={LOGIN_HEADER_IMAGE_URL.logo} alt='header_logo' />
        </a>
      </DefaultInnerRootCont>
    </Root>
  )
}

export default FormHeader
