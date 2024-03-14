const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {
  const users = await sql`SELECT * from users`;
  res.json(users);
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const users = await sql`SELECT * from users where email=${email}`;

  if (users.length > 0) {
    res.status(400).json({ message: "Already registered" });
    return;
  }

  if (password.length < 8) {
    res.status(400).json({ message: "Password must be at least 8 characters" });
    return;
  }

  const hash = bcrypt.hashSync(password, 8);

  await sql`insert into users(id, email, name, password) values(${uuidv4()}, ${email}, ${name}, ${hash})`;

  res.sendStatus(204);
});

module.exports = router;
