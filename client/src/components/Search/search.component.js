import React from "react";
import Result from '../Result/Result'

import "./search.style.css";


const Search = ({ handleChange, searchInfo }) => (
  <div>
    <input
     
      className="search"
      type="search"
      placeholder="Search"
      onChange={handleChange}
    />

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


