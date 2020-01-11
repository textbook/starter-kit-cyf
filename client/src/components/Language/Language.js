import React, { Component } from "react";

class Language extends Component {
	render() {
		return (
			<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Language
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<a className="dropdown-item" href="#">IT</a>
					<a className="dropdown-item" href="#">EN</a>
					<a className="dropdown-item" href="#">SP</a>
					<a className="dropdown-item" href="#">FR</a>
				</div>
			</li>


		);
	}
}

export default Language;