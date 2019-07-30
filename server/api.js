import { Router } from "express"
import { getClient } from "./db"
import { getResult, jwttokencreator } from "./helper"

export const api = new Router()

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

api.get("/get-pin", (req, res) => {
  const client = getClient()

  client.connect(function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("quiz")

    collection.find().toArray(function(error, result) {
      result = result.sort((a, b) => a.pin - b.pin)
      const pin =
        result[result.length - 1].pin + Math.ceil(Math.random() * 10) + 1

      res.send(error || { pin })
      client.close()
    })
  })
})

api.get("/quiz/:pin?", (req, res) => {
  const client = getClient()

  client.connect(function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("quiz")

    let { pin } = req.params
    pin = parseInt(pin, 10)
    collection.find({ pin }).toArray(function(error, result) {
      res.send(error || result)
      client.close()
    })
  })
})

api.get("/result/:pin?", (req, res) => {
  const client = getClient()
  client.connect(function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("student_answers")

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

    collection.insertOne(req.body, function(error, result) {
      res.send(error || result.ops[0])
      client.close()
    })
  })
})

api.post("/login", function(req, res) {
  const { email, password } = req.body
  const client = getClient()
  client.connect(function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("users")

    collection.find({ email }).toArray((error, result) => {
      const User = result[0]
      if (User.password === password) {
        const options = {
          role: User.role,
          email: User.email,
          _id: User._id
        }
        client.close()
        const token = jwttokencreator(options)
        return res.status(200).send(token)
      } else {
        client.close()
        return res.status(400).send({ msg: "Wrong email or password." })
      }
    })
  })
})

api.put("/answer", (req, res) => {
  const client = getClient()
  client.connect(async function() {
    const db = client.db("heroku_shn7149c")
    const collection = db.collection("student_answers")
    const { pin, email, answers, _id } = req.body
    const point = getResult(answers)

    const user = await collection.findOne({ email, pin })
    if (user) {
      collection.updateOne(
        { pin, email },
        { $set: { answers, point } },
        { returnOriginal: false },
        function(error, result) {
          res.send(error || { point })
          return client.close()
        }
      )
    } else {
      collection.insertOne(
        { pin, email, answers, userId: _id, point },
        (err, result) => {
          res.send(err || { point })
          return client.close()
        }
      )
    }
  })
})
