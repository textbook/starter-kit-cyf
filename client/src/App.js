import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Components/Home';
import CreateQuiz from './Components/CreateQuiz';
import EnterPin from './Components/EnterPin';
import TakeQuiz from './Components/TakeQuiz';
import Results from './Components/Results';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e53935',
      main: '#CE322F',
      dark: '#CE322F',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#808080',
      dark: '#ba000d',
      contrastText: '#000'
    },
    blue: {
      light: '#e53935',
      main: '#2196f3',
      dark: '#CE322F',
      contrastText: '#fff'
    },
    red: {
      light: '#e53935',
      main: '#f44336',
      dark: '#CE322F',
      contrastText: '#fff'
    },
    green: {
      light: '#e53935',
      main: '#4caf50',
      dark: '#CE322F',
      contrastText: '#fff'
    },
    yellow: {
      light: '#e53935',
      main: '#ffeb3b',
      dark: '#CE322F',
      contrastText: '#fff'
    }
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/CreateQuiz" component={CreateQuiz} />
          <Route path="/EnterPin" component={EnterPin} />
          <Route path="/TakeQuiz" component={TakeQuiz} />
          <Route path="/Results" component={Results} />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
export default App;
