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
