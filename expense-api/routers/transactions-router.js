const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  const transactions =
    await sql`SELECT transactions.id, amount::money::numeric::float8, category_id, categories.name categories_name, transactions.created_at FROM transactions left join categories on transactions.category_id = categories.id`;
  res.json(transactions);
});

router.get("/sum", async (req, res) => {
  const incomeSum =
    await sql`SELECT SUM(amount) from transactions where amount::money::numeric::float8 > 0`;
  const expenseSum =
    await sql`SELECT SUM(amount) from transactions where amount::money::numeric::float8 < 0`;
  res.json({
    incomeSum: incomeSum[0].sum,
    expenseSum: expenseSum[0].sum,
  });
});

router.post("/", async (req, res) => {
  const { amount, category_id, created_at } = req.body;

  await sql`insert into transactions(id, amount, category_id) values(${uuidv4()}, ${amount}, ${category_id}, ${created_at})`;

  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  const { amount } = req.body;
  await sql`update transactions set amount = ${amount} where id = ${uuidv4()}`;
  res.sendStatus(204);
});

router.delete("/:id", async (req, res) => {
  await sql`delete from transactions where id = ${uuidv4()}`;

  res.sendStatus(204);
});

module.exports = router;
