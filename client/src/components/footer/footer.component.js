import React, { Component } from "react";
import "./footer.style.css";

class Footer extends Component{
	render() {
		return (<div>
			<h1>Footer Components below ↓</h1>
			<div className="grid-container">
				<div className="grid-item">1</div>
				<div className="grid-item">2</div>
				<div className="grid-item">3</div>
				<div className="grid-item">4</div>
				<div className="grid-item">5</div>
				<div className="grid-item">6</div>
			</div>
		</div>
		);
	}
}

export default Footer;