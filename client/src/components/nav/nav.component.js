import React from "react";

import Logo from "./Logo/cyf-logo.png";
import { NavLink } from "react-router-dom";

import "./nav.style.css";
import Language from "../Language/Language";




const NavBar = () => (
	<>
		<NavLink to="/">
			<img className="logo" src={Logo} alt="logo" />
		</NavLink>
		<NavLink className="nav" to="/home">
      Home
		</NavLink>

		<NavLink className="nav" to="/ourwork">
      OUR WORK
		</NavLink>

		<NavLink className="nav" to="/about">
      About
		</NavLink>
		<Language />
	</>
);

export default NavBar;

