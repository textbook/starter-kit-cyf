import { Router } from "express";

import { getClient } from "./db";

const { check, validationResult, oneOf } = require('express-validator');
const { Helper } = require("./helper.js");
const helper = new Helper();

const api = new Router();


api.get('/singleterm', function(request, response) {
    const client = getClient();

    client.connect(function() {
        const db = client.db('glossary')
        const collection = db.collection('definitions')

        const searchObject = {}

        if (request.query.term) {
            searchObject.term = request.query.term
        }

        if (request.query.topic) {
            searchObject.topic = request.query.topic
        }



        collection.find(searchObject).toArray(function(error, def) {
            response.send(error || def)
            client.close()
        })
    })
})

api.post('/addterm', helper.isValidQuery(), function(request, response) {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({
            errors: errors.array()
        });
    }

    const client = getClient();


    const query = Object.keys(request.query);
    const searchObject = helper.generateSearchObject(query, request);
    if (helper.isObjectEmpty(searchObject)) {
        return response.status(400).json(`Error: Invalid criteria`)
    }

    client.connect(function() {
        const db = client.db('glossary')
        const collection = db.collection('definitions')
        collection.findOne(searchObject, function(error, definition) {
            if (definition) {
                return response.status(400).json(`Error: ${definition.term} is already defined`)
            } else if (error) {
                return response.status(400).json(error)
            } else {
                collection.insertOne(searchObject, function(error, result) {
                    response.status(200).send(error || result.ops[0])
                    client.close()

                })

            }

        })

    })


})




api.get("/", (_, res, next) => {
  const client = getClient();

  client.connect((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Hello, Heroku!" });
    client.close();
  });
});

export default api;
