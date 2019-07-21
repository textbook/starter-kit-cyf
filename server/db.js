import { MongoClient } from "mongodb"

require("dotenv").config()
const dbUrl = process.env.MONGODB_URI

const configuration = { useNewUrlParser: true }

export const getClient = () => new MongoClient(dbUrl, configuration)
