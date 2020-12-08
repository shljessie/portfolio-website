import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import React, { useContext } from "react"
import { Typography, makeStyles } from "@material-ui/core"

import { FUNCTION_ITEM_DATA } from "../constants/PageData"
import {HOW_TO_DATA} from '../constants/PageData'
import { HOW_TO_IMAGE_URLS } from "../constants/ImageUrls"
import { ThemeContext } from "../context/ThemeContext"
import styled from "styled-components"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#101010',
  },
  innerTextCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerImgCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  specialTextCont: {
    maxWidth: 500,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  imageCont:{
    maxWidth: '100%', 
    maxHeight: '100%',
  },
  image:{
    maxWidth: '100%', 
    maxHeight: '100%'
  }
}))

const Container = styled.div`
  display: 'flex';
  flex-direction:'column';
  align-items:'center';
`

const Tabs = styled.div`
height: '50px';
`

type TabProps = {
  isActive: boolean
}

const Tab = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 200px;
  margin: 0px 30px;
  color: ${(props: TabProps) => props.isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  transition: all .3s ease-in-out;
`

type GifProps = {
  isActive: boolean
}

const ImageCont = styled.div`
  display: ${(props: GifProps) => props.isActive ? 'unset' : 'none'};
  width: 60vw;
  height: 60vh;
`

const Howto = () => {

  const classes = useStyles()

  const { setHeaderTheme } = useContext(ThemeContext);
  setHeaderTheme('dark')

  const [tabIndex, setTabIndex] = React.useState(0)

  const onTabIndexChange = (event: React.ChangeEvent<{}>, index: number) => {
    setTabIndex(index)
  }

  return (
          <div className="howto">
          <DefaultOuterRootCont style={{ backgroundColor: '#101010', marginBottom: theme.spacing(30) }}>
            <DefaultInnerRootCont>
              <Container>
                  <div>
                    <Typography variant='h4' style={{ color: '#fff', marginTop: theme.spacing(3), marginBottom:  theme.spacing(4)}}>
                      { FUNCTION_ITEM_DATA.benefits[tabIndex].title }
                    </Typography>

                  
                    <div className={classes.innerImgCont}>
                  {
                    HOW_TO_IMAGE_URLS.steps.map((imgUrl, i) => {
                      return (
                        <ImageCont className={classes.imageCont} isActive={tabIndex === i} style={{marginBottom: theme.spacing(7)}}>
                          <img className={classes.image} src={imgUrl}  alt="how_to"/>
                        </ImageCont>
                      )
                    })
                  }
              </div>


                      <Tabs style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                      {
                        HOW_TO_DATA.steps.map((step, i) => {
                          return(
                            <Tab onClick={(e) => onTabIndexChange(e,i)} isActive={tabIndex === i} style={{height: '200px',}}>
                              <div style={{display:'flex', flexDirection: 'column', textAlign: 'start'}}>
                                <Typography variant="h6" style={{verticalAlign: 'text-top', marginBottom: theme.spacing(2)}}>
                                { HOW_TO_DATA.steps[i].step }
                                </Typography>
                                <Typography variant="body1" style={{marginBottom: '18px'}}>
                                { HOW_TO_DATA.steps[i].description }
                                </Typography>
                              </div>
                            </Tab>
                          )
                        }) 
                      }
                      </Tabs>
                    
                </div>
              </Container>
            </DefaultInnerRootCont>
          </DefaultOuterRootCont>
          </div>
  )
}


export default Howto
