import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Header() {
  return (
    <header className="App-header">
      <Link className="App-header" to="/">
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className="Title">Quiz App</h4>
      </Link>
    </header>
  );
}
