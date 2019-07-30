import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import LeadMentor from "./Auth/LeadMentor"
import PrivateRoute from "./Auth/PrivateRoute"
import Student from "./Auth/Student"
import CreateQuiz from "./Components/CreateQuiz/index"
import Home from "./Components/Home"
import Play from "./Components/Play"
import Result from "./Components/Result"
import Results from "./Components/Results"
import "./Grid.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e53935",
      main: "#808080",
      dark: "#CE322F",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#808080",
      dark: "#ba000d",
      contrastText: "#000"
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
            <PrivateRoute exact path="/results" component={Results} />
            <PrivateRoute exact path="/result" component={Result} />
            <LeadMentor exact path="/createquiz" component={CreateQuiz} />
            <Student exact path="/play" component={Play} />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    )
  }
}
export default App
