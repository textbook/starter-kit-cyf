import React, { Component } from "react";
import MainPage from "./components/MainPage"
import { getMessage } from "./service";
import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import { Route, Link, BrowserRouter as Router } from "react-router-dom"
import SignUp from "./components/Signup";

export class App extends Component {
  state = { message: "Loading..." };

  componentDidMount() {
    getMessage().then(message => this.setState({ message }));
  }

  render() {
    const { message } = this.state;
    return (
      <Router>
        <Route path="/Signup" component={SignUp} />
        <Route path="/" component={MainPage} />
         {/* <Route path="/Test"component={Test} />  */}
      </Router>
    );
  }
}
export default App;
