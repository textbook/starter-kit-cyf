"use strict";
module.exports = app => {
  var countries = require("../controller/countries.controller");
 app.route("/countries").get(countries.list_countries);

   app.route("/countries/:searchValue").get(countries.list_countries_by_value);
 
};
