import './App.css';

import React , { useEffect, useState }from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CochlInternship from './pages/CochlInternship'
import Home from './pages/Home';
import MercedesBenz from './pages/MercedesBenz'
import { MuiThemeProvider } from '@material-ui/core/styles';
import MyCourseIndex from './pages/MyCourseIndex'
import icon from './images/icon.jpeg'
import styled from "styled-components"
import terms from './pages/terms'
import theme from './theme'

const BackToTopImgCont = styled.div`
  -moz-animation: bounce 1s infinite;
  -webkit-animation: bounce 1s infinite;
  animation: bounce 3s infinite;
 @keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-25px);
  }
  60% {
    transform: translateY(-25px);
  }
}
`

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])


  return (

    <>
    {loading === false ? (
    <MuiThemeProvider theme={theme}>
    <div className="App">
         <Router>
           <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/terms" component={terms} />
            <Route path="/MercedesBenz" component={MercedesBenz} />
            <Route path="/CochlInternship" component={CochlInternship} />
            <Route path="/MyCourseIndex" component={MyCourseIndex} />
            </Switch>
            <Home/>
          </Router>
    </div>
  </MuiThemeProvider>
      ) : (
        <>
        <div style={{backgroundColor: 'white', height: '100vh', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
        <BackToTopImgCont>
        <img  src= {icon} alt='login_image' style={{height: '400px', marginLeft: theme.spacing(5)}}/>
        </BackToTopImgCont>
        </div>
        </>
      )}
      </>
  );

}

export default App;

