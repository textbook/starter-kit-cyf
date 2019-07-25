<<<<<<< HEAD
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import LeadMentor from "./Auth/LeadMentor"
import PrivateRoute from "./Auth/PrivateRoute"
import Student from "./Auth/Student"
import CreateQuiz from "./Components/CreateQuiz"
import Home from "./Components/Home"
import Play from "./Components/Play"
import Results from "./Components/Results"
import "./Grid.css"
=======
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Components/Home';
import CreateQuiz from './Components/CreateQuiz';
import Play from './Components/Play';
import Results from './Components/Results';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import './Grid.css';
>>>>>>> origin

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e53935",
      main: "#CE322F",
      dark: "#CE322F",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#808080",
      dark: "#ba000d",
      contrastText: "#000"
    },
    blue: {
      light: "#e53935",
      main: "#2196f3",
      dark: "#CE322F",
      contrastText: "#fff"
    },
    red: {
      light: "#e53935",
      main: "#f44336",
      dark: "#CE322F",
      contrastText: "#fff"
    },
    green: {
      light: "#e53935",
      main: "#4caf50",
      dark: "#CE322F",
      contrastText: "#fff"
    },
    yellow: {
      light: "#e53935",
      main: "#ffeb3b",
      dark: "#CE322F",
      contrastText: "#fff"
    }
  }
})

class App extends Component {
  render() {
    return (
      <div className="container">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
<<<<<<< HEAD
          <PrivateRoute exact path="/results" component={Results} />
          <LeadMentor exact path="/createquiz" component={CreateQuiz} />
          <Student exact path="/play" component={Play} />
        </BrowserRouter>
      </ThemeProvider>
    )
=======
          <Route path="/CreateQuiz" component={CreateQuiz} />
          <Route path="/play" component={Play} />
          <Route path="/Results" component={Results} />
        </BrowserRouter>
      </ThemeProvider>
      </div>
    );
>>>>>>> origin
  }
}
export default App
