import React, { Component } from "react";
import Footer from "../footer/footer.component";
import Map from "../map/map.component";

import NavBar from "../nav/nav.component";
import Search from "../Search/search.component";
import Result from "../Result/Result";

class HomePage extends Component{
	render(){
		return(
			<div>

				<NavBar />
				<Search />
				<Result />

				<Map />
				<Footer />
			</div>
		);
	}
}

export default HomePage;