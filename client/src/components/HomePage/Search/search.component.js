import React from "react";
import Result from "../Result/Result";

import "./search.style.css";


const Search = ({ handleChange, searchInfo }) => (
	<div>
		<div className="container">
			<div className="colomn">
				<div className="input-group md-form form-sm form-2 pl-0">
					<input onChange={handleChange} className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"></input>
					<div className="input-group-append">
						<span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search text-grey"
							aria-hidden="true"></i></span>
					</div>
				</div>
			</div>
		</div>




		<div>
			{searchInfo.map(({ Country, City, Address, Phone, Fax, id }) => (
				<div key={id}>
					<Result
						country={Country}
						city={City}
						address={Address}
						phone={Phone}
						fax={Fax}
					/>
				</div>
			))}
		</div>
	</div>
);

export default Search;


