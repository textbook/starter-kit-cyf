import { Router } from "express";
import { getClient } from "./db";

const api = new Router();

api.get("/", (_, res, next) => {
  const client = getClient();

  client.connect(err => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Hello, Heroku!" });
    client.close();
  });
});

api.get("/takequiz", (req, res) => {
  const client = getClient();
  client.connect(function() {
    const db = client.db("cyf");
    const collection = db.collection("quizzes");

    collection.find({}).toArray(function(error, result) {
      res.send(error || result);
      client.close();
    });
  });
});

api.post("/createquiz", (req, res) => {
  const client = getClient();
  client.connect(function() {
    const db = client.db("cyf");
    const collection = db.collection("quizzes");

    const { question, answers } = req.body;

    if (!question || !answers) {
      res.sendStatus(400);
    }

    const quiz = {
      question,
      answers
    };

    collection.insertOne(quiz, function(error, result) {
      res.send(error || result.ops[0]);
      client.close();
    });
  });
});

export default api;
