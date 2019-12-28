require("dotenv").config();
var cors = require("cors");
const express = require("express");
const app = express();


app.use(cors());

var http = require("http");

const router = require("./router");

var bodyParser = require("body-parser");

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require("./api-home/routes/countries.route"); //importing routes
routes(app); //register the routes

app.use(router);

server.listen(process.env.PORT, () => {
  console.log("listening on *:3100");
});
