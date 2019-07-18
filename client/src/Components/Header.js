import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h4 className="Title">Quiz App</h4>

      <div className="App-header-two">
        <Link className="Menu" to="/">
          Home
        </Link>
        <Link className="Menu" to="/CreateQuiz">
          Create Quiz
        </Link>
        <Link className="Menu" to="/EnterPin">
          Enter Pin
        </Link>
        <Link className="Menu" to="/TakeQuiz">
          Take Quiz
        </Link>
        <Link className="Menu" to="/Results">
          Results
        </Link>
      </div>
    </header>
  );
}
