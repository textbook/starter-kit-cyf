import React, { Component } from "react";

import { getMessage } from "./service";

import "./App.css";

import HomePage from "./components/HomePage/homepage.component";




export class App extends Component {

	state = { countries: [] };

	componentDidMount() {
		getMessage().then((country) => this.setState({ countries:country }));
	console.log(this.state.countries)
	}

	render() {
	
		return (
			<div>
{/* 'countries' is holding the data coming from the server. so try to map or filter etc on countries. You can view the console.log on you react developer tools to see the data coming. look up at componentDidMount life cycle, i did console.log there for easy understaing */}
	<HomePage />
	</div>
		);
	}
}
export default App;
