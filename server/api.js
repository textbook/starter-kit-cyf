import { Router } from "express";

const api = new Router();

api.get("/", (_, res) => {
  res.json({ message: "Hello, world!" });
});

export default api;
