const pgp = require("pg-promise")(/*options*/);
require("dotenv").config();

const db = pgp(process.env.connectionString); // database instance;
module.exports = db;
