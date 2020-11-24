import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Account from './pages/Account'
import CheckEmail from './pages/CheckEmail'
import Home from './pages/Home';
import Login from './pages/Login'
import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ResetPassword from './pages/ResetPassword'
import Signup from './pages/Signup'
import TermsofService from './pages/TermsofService'
import TryFree from './pages/TryFree'
import UploadVideo from './pages/UploadVideo'
import theme from './theme'

function App() {
  return (

    <MuiThemeProvider theme={theme}>
      <div className="App">
           <Router>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/resetpassword" component={ResetPassword} />
              <Route path="/checkemail" component={CheckEmail} />
              <Route path="/signup" component={Signup} />
              <Route path="/termsofservice" component={TermsofService} />
              <Route path="/uploadvideo" component={UploadVideo} />
              <Route path="/tryfree" component={TryFree} />
              <Route path="/account" component={Account} />
            </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;

