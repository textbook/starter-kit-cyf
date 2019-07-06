import { Router } from "express";

import { getClient } from "./db";

const api = new Router();

api.get("/", (_, res) => {
  const client = getClient();

  client.connect(() => {
    res.json({ message: "Hello, world!" });
    client.close();
  });
});

export default api;
