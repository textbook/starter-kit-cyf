import { Router } from "express";
import {
  registerTest,
  loginTest,
  getUsers,
  getSessions,
  getAttendance,
  createSession,
  getPersonalAttendance,
  updateSession,
  register,
  login
} from "./controllers.js";
import { getClient } from "./db";

const api = new Router();

api.get("/", (_, res, next) => {
  const client = getClient();

  client.connect(err => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Hello, Welcome to attendance-register!" });
    client.close();
  });
});

api.post("/registerJoanTest", registerTest);

api.get("/loginJoanTest", loginTest);

//listing all users (student, mentor and admin)
api.get("/users", getUsers);

//listing all users (student, mentor and admin)
api.get("/personalAttendance", getPersonalAttendance);

//listing all sessions with attendence list
api.get("/sessions", getSessions);

//sign up for all users(student and mentor), require name, email, password and status from frontend
api.post("/register", register);

//allow the user to be added to database after log-in from frontend with the `timeofArrival`. require email and password, status from frontend
api.put("/login", login); //out

//show the attendance of the the current date with, list of attending students, total numbers of atendants, list of missing students and total number of missing students. proportion of attending students to total students
api.get("/attendance", getAttendance);

//creating sessions by admin, require name of session, session number, date and city as request.body from frontend
api.post("/createSession", createSession);

//updating session with date
api.put("/updateSession", (req, res) => {
  const client = getClient();
  const selectedSessionDate = req.query.date;
  client.connect(async err => {
    if (err) {
      return next(err);
    }
    let { name, session, date, city, latitude, longitude } = req.body;
    const updateObject = {};
    name ? (updateObject.name = name) : null;
    city ? (updateObject.city = city) : null;
    session ? (updateObject.session = session) : null;
    date ? (updateObject.date = date) : null;
    latitude ? (updateObject.latitude = latitude) : null;
    longitude ? (updateObject.longitude = longitude) : null;

    const db = client.db("heroku_cs1q5qk5");

    let collection = db.collection("sessions");
    const options = { returnOriginal: false };
    collection.findOneAndUpdate(
      { date: selectedSessionDate }, // { date : selectedSessionDate}
      { $set: updateObject },
      options,
      function(error, result) {
        if (result.value) {
          res.send(error || result.value);
        } else {
          console.log("no result");
          res.sendStatus(404);
        }
      }
    );
    client.close();
  });
});

export default api;
