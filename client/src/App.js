import React, { Component } from "react";

import { getMessage } from "./service";

import "./App.css";

import HomePage from './components/HomePage/homepage.component'

export class App extends Component {

	state = { message: "Loading..." };

	componentDidMount() {
		getMessage().then((message) => this.setState({ message }));
	}

	render() {
		const { message } = this.state;
		return (
			<div>
				

				
				<p className="message" data-qa="message">{message}</p>

<HomePage />

			</div>
		);
	}
}
export default App;
