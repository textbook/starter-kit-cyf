import React, { Component } from "react";

class Language extends Component{
	render () {
		return (
			<div>
				<ul className="ul-bar">
					<li>
						<a href="">IT</a>
					</li>
				</ul>
				<ul className="ul-bar">
					<li>
						<a href="">UK</a>
					</li>
				</ul>
				<ul className="ul-bar">
					<li>
						<a href="">ES</a>
					</li>
				</ul>
				<ul className="ul-bar">
					<li>
						<a href="">AR</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Language;