import { Router } from "express";
import User from "./model/User";
const dayjs = require("dayjs");

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

api.post("/registerJoanTest", (req, res, next) => {
  const client = getClient();
  client.connect(err => {
    if (err) {
      return next(err);
    }
    const db = client.db("heroku_cs1q5qk5");
    const collection = db.collection("users");
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      status: req.body.status
    });

    collection.insertOne(user, (err, result) => {
      res.send(err || result.ops[0]);
    });
    // res.json(savedUser);

    // res.send(user);

    client.close();
  });
});
api.get("/loginJoanTest", (req, res, next) => {
  const client = getClient();
  client.connect(err => {
    if (err) {
      return next(err);
    }
    const db = client.db("heroku_cs1q5qk5");
    const collection = db.collection("users");
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      status: req.body.status
    });

    collection.findOne(user, (err, result) => {
      res.send(err || result.ops[0]);
    });
    // res.json(savedUser);

    // res.send(user);

    client.close();
  });
});

//listing all users (student, mentor and admin)
api.get("/users", (req, res, next) => {
  const client = getClient();
  client.connect(err => {
    if (err) {
      return next(err);
    }
    const db = client.db("heroku_cs1q5qk5");
    const collection = db.collection("users");
    collection.find().toArray((err, users) => {
      res.send(err || users);
    });
    client.close();
  });
});

//listing all sessions with attendence list
api.get("/sessions", (req, res, next) => {
  const client = getClient();
  client.connect(err => {
    if (err) {
      return next(err);
    }
    const db = client.db("heroku_cs1q5qk5");
    const collection = db.collection("sessions");
    collection.find().toArray((err, sessions) => {
      res.send(err || sessions);
    });
    client.close();
  });
});

//sign up for all users(student and mentor), require name, email, password and status from frontend
api.post("/register", (req, res, next) => {
  const client = getClient();
  client.connect(async err => {
    if (err) {
      return next(err);
    }
    const { name, email, password, status } = req.body;

    if (!name || !email || !password || !status) {
      res.status(400).json({ msg: "fill out all the fields" });
      return;
    }
    const db = client.db("heroku_cs1q5qk5");
    const collection = db.collection("users");
    //check if the email is already in use
    const checkUser = await collection.findOne({
      email: req.body.email
    });
    if (checkUser) {
      res.status(404).json({ msg: "This email is already in use" });
      return;
    }
    //if the email is not in use
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      status: req.body.status
    });
    collection.insertOne(user, (err, result) => {
      res.send(err || result.ops[0]);
    });
    client.close();
  });
});

//allow the user to be added to database after log-in from frontend with the `timeofArrival`. require email and password, status from frontend
api.put("/login", (req, res, next) => {
  const client = getClient();
  client.connect(async err => {
    if (err) {
      return next(err);
    }
    const { email, password, status } = req.body;
    if (!email || !password || !status) {
      res.status(400).json({ msg: "fill out all the fields" });
      return;
    }
    const db = client.db("heroku_cs1q5qk5");
    //check if the user email and password matches
    let collection = db.collection("users");
    const user = await collection.findOne({
      email: req.body.email
    });
    //if no matching with the provided email
    if (!user) {
      res.status(404).json({
        msg: "your email is wrong"
      });
      return;
    }
    //checking the satus of the user
    if (user.status != req.body.status) {
      res.status(400).json({
        msg: `You selected wrong status as ${
          req.body.status
        }, you should select ${user.status} status!`
      });
      return;
    }
    //checking the password
    if (user.password != req.body.password) {
      res.status(400).json({
        msg: `Your password is wrong!`
      });
      return;
    }
    //if the pasword is correct
    //TODO: add one step for checking the location
    const today = dayjs().format("DD/MM/YYYY");
    collection = db.collection("sessions");
    const sessionToUpdate = await collection.findOne({
      //date : today;
      date: "20/07/2019" //hard coded for testing
    });
    if (!sessionToUpdate) {
      res.status(404).send({
        msg: "session is not created yet"
      });
      return;
    }
    //if session is created on database
    //change the status of student as attended with the arrival time
    sessionToUpdate.attendance.forEach(student => {
      if (student.email === req.body.email) {
        if (student.isAttended) {
          res.status(404).json({
            msg: "You have already registered to today's session!"
          });
          return;
        } else {
          const timeOfArrival = dayjs().format("HH:mm");
          student["isAttended"] = true;
          student["timeOfArrival"] = timeOfArrival;
        }
      }
    });
    //updating the session data on database
    const options = {
      returnOriginal: false
    };
    collection.findOneAndUpdate(
      {
        date: "20/07/2019"
      }, // { date : today}
      {
        $set: {
          attendance: sessionToUpdate.attendance
        }
      },
      options,
      (err, result) => {
        if (result.value) {
          res.send(err || result.value);
        } else {
          res.sendStatus(404);
        }
      }
    );
    client.close();
  });
});

//show the attendance of the the current date with, list of attending students, total numbers of atendants, list of missing students and total number of missing students. proportion of attending students to total students
api.get("/attendance", (req, res, next) => {
  const client = getClient();
  client.connect(err => {
    if (err) {
      return next(err);
    }
    const db = client.db("heroku_cs1q5qk5");
    const collection = db.collection("sessions");
    collection.find().toArray((err, sessions) => {
      const today = dayjs().format("DD/MM/YYYY");
      const selectedDate = req.query.date === "today" ? today : req.query.date;
      // console.log("******", req.query.date);
      // console.log("******", selectedDate);
      let currentSession = sessions
        // .filter(session => session.date === "14/07/2019") //it is hard coded for testing
        .filter(session => session.date === selectedDate); //should be for real life
      if (currentSession.length > 0) {
        currentSession = currentSession.reduce(session => session);
        const { name, session, date } = currentSession;
        const attendingStudents = currentSession.attendance.filter(
          user => user.status === "STUDENT" && user.isAttended === true
        );
        const totalAttendingStudents = attendingStudents.length;
        const absentStudents = currentSession.attendance.filter(
          user => user.status === "STUDENT" && user.isAttended === false
        );
        const totalAbsentStudents = absentStudents.length;
        const proportion = (
          (totalAttendingStudents * 100) /
          (totalAttendingStudents + totalAbsentStudents)
        ).toFixed(2);
        res.send(
          err || {
            sessions,
            name,
            session,
            date,
            attendingStudents,
            totalAttendingStudents,
            absentStudents,
            totalAbsentStudents,
            proportion
          }
        );
      } else {
        res.send(err || { sessions });
      }
    });
  });
});
//creating sessions by admin, require name of session, session number, date and city as request.body from frontend
api.post("/createSession", (req, res) => {
  const client = getClient();
  client.connect(async err => {
    if (err) {
      return next(err);
    }
    let { name, session, date, city } = req.body;
    if (!name || !session || !date || !city) {
      res.sendStatus(400);
      return;
    }
    const db = client.db("heroku_cs1q5qk5");
    let collection = db.collection("users");
    let studentUsers = await collection.find({ status: "STUDENT" }).toArray();
    studentUsers = studentUsers.map(user => {
      return {
        studentId: user._id,
        name: user.name,
        email: user.email,
        status: user.status,
        city: user.city,
        isAttended: false,
        timeOfArrival: null
      };
    });
    const newSession = { name, session, date, city, attendance: studentUsers };
    collection = db.collection("sessions");
    collection.insertOne(newSession, (err, result) => {
      res.send(err || result.ops[0]);
    });
    client.close();
  });
});

export default api;
