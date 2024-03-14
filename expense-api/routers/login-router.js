const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");

router.get("/", async (req, res) => {
  const users = await sql`SELECT * from users`;
  res.json(users);
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const login = await sql`SELECT * from users where email=${email}`;

  if (login.length === 0) {
    res.status(400).json({ message: "Iim hereglegch bhgui" });
    return;
  }

  const user = login[0];

  if (!bcrypt.compareSync(password, user.password)) {
    res.status(400).json({ message: "Username or password is not correct" });
    return;
  }
  res.status(200).json({ message: "Login success" });
});

module.exports = router;
