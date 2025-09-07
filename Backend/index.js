const express = require("express");
const port =process.env.PORT || 5000;
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [{ username: "anu", password: "123" }]; // default user

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ success: false, message: "Username and password are required" });
  }

  const existing = users.find((u) => u.username === username);
  if (existing) {
    return res.status(400).send({ success: false, message: "User already exists" });
  }

  users.push({ username, password });
  console.log("Updated users:", users);
  res.send({ success: true, message: "Signup successful" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send(false);
  }

  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(port, () => {
  console.log("Server started at port 5000");
});
