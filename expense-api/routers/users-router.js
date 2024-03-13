const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  const users = await sql`SELECT * from users`;
  res.json(users);
});

router.post("/", async (req, res) => {
  const { email, name, password } = req.body;

  await sql`insert into users(id, email, name, password) values(${uuidv4()}, ${email}, ${name}, ${password})`;

  res.sendStatus(204);
});

module.exports = router;
