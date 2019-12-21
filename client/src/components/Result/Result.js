import React, { Component } from "react";

import "./result.css";


class Result extends Component {
	render () {
		return(

			<div className="row">
				<div className="main col-lg-6">
					<div className="jumbotron">
						<h1
							style={{
								backgroundColor: "white",
								height: 100,
								boxSizing: "border-box",
								weight: 100,
							}}
						>
								Result Box

						</h1>
					</div>
				</div>
			</div>

		);
	}
}

export default Result;