import React, { Component } from "react";
import { Link } from 'react-router-dom'
import logo from "../logo.png";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="Title">Assessment Quiz App</h3>
        </header>
        <Link to="/CreateQuiz">Create Quiz</Link>
        <Link to="/EnterPin">Enter Pin</Link>
        <Link to="/Results">Results</Link>
        <Link to="/TakeQuiz">Take Quiz</Link>
      </div>
    );
  }
}

export default Home;
