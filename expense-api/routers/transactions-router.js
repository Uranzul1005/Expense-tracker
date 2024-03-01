const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");

router.get("/", async (req, res) => {
  const transactions = await sql`SELECT * FROM transactions`;
  res.json(transactions);
});

router.post("/", async (req, res) => {
  const { name, amount, transaction_type, description } = req.body;

  const response =
    await sql`insert into transactions(name, amount, transaction_type, description) values(${name}, ${amount}, ${transaction_type}, ${description})`;

  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, amount, transaction_type, description } = req.body;
  await sql`update transactions set name = ${name}, amount = ${amount}, transaction_type = ${transaction_type}, description = ${description} where id = ${id}`;

  res.sendStatus(204);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await sql`delete from transactions where id = ${id}`;

  res.sendStatus(204);
});

module.exports = router;
