const express = require("express");
const cors = require("cors");
const transactionsRouter = require("./routers/transactions-router");
const usersRouter = require("./routers/users-router");
const categoriesRouter = require("./routers/categories-router");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsRouter);
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
