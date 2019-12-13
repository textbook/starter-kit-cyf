import React from 'react'

import Logo from "./Logo/cyf-logo.png";

import './nav.style.css'

import Search from '../Search/search.component'


const NavBar = () => (
  <div>
    <nav className="navbar">
      <img
        className="logo"
        style={{ width: 300, height: 100 }}
        src={Logo}
        alt="logo"
      />
      <Search />
      <ul className="ul-bar">
        <li>
          <a href="#">WHO WE ARE</a>
        </li>
      </ul>
      <ul className="ul-bar">
        <li>
          <a href="#">WHERE WE ARE</a>
        </li>
      </ul>
      <ul className="ul-bar">
        <li>
          <a href="#">OUR WORK</a>
        </li>
      </ul>
      <ul className="ul-bar">
        <li>
          <a href="#">STORES</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavBar