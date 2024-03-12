const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  const categories = await sql`SELECT * from categories`;
  res.json(categories);
});

router.post("/", async (req, res) => {
  const { id, name } = req.body;

  const response =
    await sql`insert into categories (id, name) values(${uuidv4()}, ${name})`;

  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await sql`update categories set id = ${uuidv4()}, name = ${name} where id = ${uuidv4()}`;

  res.sendStatus(204);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await sql`delete from categories where id = ${uuidv4()}`;

  res.sendStatus(204);
});

module.exports = router;
