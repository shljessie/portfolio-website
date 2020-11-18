import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './pages/Home';
import React from 'react';
import theme from './theme'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
          <Home />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
