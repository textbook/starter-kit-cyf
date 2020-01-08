"use strict";
const db = require("../../db");

exports.list_countries = async (req, res) => {
  try {
   
    let accData = await db.any(
      `SELECT * FROM countries`
      
    );
   
   
    res.send(accData);

  } catch (error) {
    res.send(error);
  }
};

exports.list_countries_by_value = async (req, res) => {
const searchValue = req.params.searchValue
console.log(searchValue)
  try {
   const data =await db.any(
`SELECT * FROM countries WHERE "Country" = '${searchValue}'`
      )
   
   console.table(data)
   res.send(data);

  } catch (error) {
    res.send(error);
  }
};
