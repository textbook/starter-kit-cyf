import React, { Component } from "react";

import { getMessage } from "./service";
import logo from "./logo.svg";
import "./App.css";
import users from "./data/users.json";
import modules from "./data/modules.json";
import Test from "./components/Test";

export class App extends Component {
  state = { message: "Loading..." };

  componentDidMount() {
    getMessage().then(message => this.setState({ message }));
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <img
          className="logo"
          data-qa="logo"
          src={logo}
          alt="Just the React logo"
        />
        <p className="message" data-qa="message">
          {message}
        </p>
        <p>user list</p>
        {/* <Test /> */}
      </div>
    );
  }
}
export default App;
