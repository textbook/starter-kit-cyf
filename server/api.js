import { Router } from "express"
import { getClient } from "./db"

const api = new Router()

api.get("/", (_, res, next) => {
  const client = getClient()

  client.connect(err => {
    if (err) {
      return next(err)
    }
    res.json({ message: "Hello, Heroku!" })
    client.close()
  })
})

api.get("/quiz/:pin?", (req, res) => {
  const client = getClient()
  client.connect(function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("quiz")

    const { pin } = req.params

    collection.find({ pin }).toArray(function(error, result) {
      res.send(error || result)
      client.close()
    })
  })
})

api.post("/quiz", (req, res) => {
  const client = getClient()
  client.connect(function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("quiz")

    if (req.body.length < 3) return res.sendStatus(400)

    collection.insertOne(req.body, function(error, result) {
      res.send(error || result.ops[0])
      client.close()
    })
  })
})

api.post("/answer", (req, res) => {
  const client = getClient()
  client.connect(function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("student_answers")

    if (req.body.length < 3) return res.sendStatus(400)

    collection.insertOne(req.body, function(error, result) {
      res.send(error || result.ops[0])
      client.close()
    })
  })
})

api.post("/result", (req, res) => {
  const client = getClient()
  client.connect(function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("results")

    const { pin } = req.params

    collection.find({ pin }, function(error, result) {
      res.send(error || result.ops[0])
      client.close()
    })
  })
})

export default api
