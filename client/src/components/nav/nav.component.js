import React from "react";

import Logo from "./Logo/cyf-logo.png";

import "./nav.style.css";
import Language from "../Language/Language";




const NavBar = () => (
	<div>
		<nav className="navbar">
			<img
				className="logo"
				style={{ width: 400, height: 100 }}
				src={Logo}
				alt="logo"
			/>

			<ul className="ul-bar">
				<li>
					<a href="">WHO WE ARE</a>
				</li>
			</ul>
			<ul className="ul-bar">
				<li>
					<a href="">WHERE WE ARE</a>
				</li>
			</ul>
			<ul className="ul-bar">
				<li>
					<a href="">OUR WORK</a>
				</li>
			</ul>
			<ul className="ul-bar">
				<li>
					<a href="">STORES</a>
				</li>
			</ul>
			<Language />
		</nav>

	</div>
);

export default NavBar;