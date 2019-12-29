"use strict";
module.exports = app => {
  var countries = require("../controller/countries.controller");
 
  app.route("/countries").get(countries.list_countries);
 
};
