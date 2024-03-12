const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  const transactions =
    await sql`SELECT transactions.id, amount, category_id, categories.name categories_name FROM transactions left join categories on transactions.category_id = categories.id`;
  res.json(transactions);
});

router.post("/", async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  const response =
    await sql`insert into transactions(id, amount) values(${uuidv4()}, ${amount})`;

  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  await sql`update transactions set amount = ${amount} where id = ${uuidv4()}`;
  res.sendStatus(204);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await sql`delete from transactions where id = ${uuidv4()}`;

  res.sendStatus(204);
});

module.exports = router;
