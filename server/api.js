import { Router } from "express";
const db = require('../server/db')


const api = new Router();

api.get("/", (_, res, next) => {
	const data = db.any('select Country from countries')
	console.table(data)
});

export default api;
