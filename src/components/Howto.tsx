import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import React, { useContext } from "react"

import { FUNCTION_ITEM_DATA } from "../constants/PageData"
import Link from "react-router-dom"
import { TECHNOLOGY_IMAGE_URLS } from "../constants/ImageUrls"
import { ThemeContext } from "../context/ThemeContext"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
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
  }
}))

const Container = styled.div`
  display: 'flex';
  flex-direction:'column';
  align-items:'center';
`

const Tabs = styled.div`
`

type TabProps = {
  isActive: boolean
}

const Tab = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  padding-left: 24px;
  width:30%;
  margin: 0px 47px;
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

const FunctionGif = styled.video`
  display: ${(props: GifProps) => props.isActive ? 'unset' : 'none'};
  width: 40%;
`
const StepsTitle = styled.div`
  vertical-align: text-top;
  font-weight:600;
  font-size:25px;
  margin-bottom: 36px;
`

const Howto = (props: Props) => {

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
                    TECHNOLOGY_IMAGE_URLS.benefits.map((imgUrl, i) => {
                      return (
                        <FunctionGif autoPlay muted loop playsInline isActive={tabIndex === i} style={{marginBottom: theme.spacing(8)}}>
                          <source src={imgUrl} type="video/mp4" />
                        </FunctionGif>
                      )
                    })
                  }
              </div>


                    <div>
                      <Tabs style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <Tab onClick={(e) => onTabIndexChange(e, 0)} isActive={tabIndex === 0} style= {{ height :'100px',}}>
                          <div style={{display:'flex', flexDirection: 'column', textAlign: 'start'}}>
                            <Typography variant="h6" style={{verticalAlign: 'text-top', marginBottom: theme.spacing(4)}}>1  Upload File</Typography>
                            <Typography variant="body1" style={{marginBottom: '32px'}}>Upload an audio or video file. 
                              Click to add media or drag and drop a file.</Typography>
                          </div>
                        </Tab>
                        <Tab onClick={(e) => onTabIndexChange(e, 1)} isActive={tabIndex === 1} style= {{ height :'128px'}}>
                          <div style={{display:'flex', flexDirection: 'column', textAlign: 'start'}}>
                          <Typography variant="h6" style={{verticalAlign: 'text-top', marginBottom: theme.spacing(4)}}>2  Separate Audio</Typography>
                          <Typography variant="body1">We detected music in the numbered sections. 
                            All numbered section will be separated. 
                              Click on a number or drag a new selections and Start editing.</Typography>
                          </div>
                        </Tab>
                        <Tab onClick={(e) => onTabIndexChange(e, 2)} isActive={tabIndex === 2} style= {{ height :'100px'}}>
                          <div style={{display:'flex', flexDirection: 'column', textAlign: 'start'}}>
                          <Typography variant="h6" style={{verticalAlign: 'text-top', marginBottom: theme.spacing(4)}}>3  Swap Music</Typography>
                          <Typography variant="body1">We have recommended similar music to the ones we have detected and removed.
                               Click on a numbered section to add music to.</Typography>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                    
                </div>
              </Container>
            </DefaultInnerRootCont>
          </DefaultOuterRootCont>
          </div>
  )
}

type Props = {}

export default Howto
