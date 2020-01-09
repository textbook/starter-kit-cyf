import React from "react";

import "./result.css";

const Result = ({ country, city, address, phone, fax }) => (
  <div>
    <div className="country">
      <label>Country: {country}</label>
      <div className="city">
        <label>City: {city}</label>
        <div className="address">
          <label>Address: {address}</label>
          <h5 className="phone">
            <label>Phone: {phone}</label>
            <span className="fax">
              <label>Fax: {fax}</label>
            </span>
          </h5>
        </div>
      </div>
    </div>
  </div>
);

export default Result;