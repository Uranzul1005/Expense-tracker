const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  res.sendStatus(204);
});

router.post("/", async (req, res) => {
  const { id } = req.params;
  const { email, name, password, avatar_img } = req.body;

  const response =
    await sql`insert into users(email, name, password, avatar_img) values(${uuidv4()}, ${email}, ${name}, ${password}, ${avatar_img})`;

  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  const { name } = req.body;
  const { password } = req.body;
  const { avatar_img } = req.body;

  await sql`update users set email = ${email}, name = ${name}, password = ${password}, avatar_img = ${avatar_img} where id = ${uuidv4()}`;

  res.sendStatus(204);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await sql`delete from task where id = ${uuidv4()}`;

  res.sendStatus(204);
});

module.exports = router;
