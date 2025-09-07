const fs = require("fs");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      /\.vercel\.app$/,
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isVercel = process.env.VERCEL === "1";
let memoryUsers = [{ username: "anu", password: "123" }]; // default user

// load users
function loadUsers() {
  if (isVercel) return memoryUsers;
  if (!fs.existsSync("users.json")) return [{ username: "anu", password: "123" }];
  return JSON.parse(fs.readFileSync("users.json", "utf8"));
}

// save users
function saveUsers(users) {
  if (isVercel) {
    memoryUsers = users;
  } else {
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
  }
}

// signup
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  let users = loadUsers();

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });
  }

  if (users.find((u) => u.username === username)) {
    return res.json({ success: false, message: "User already exists" });
  }

  users.push({ username, password });
  saveUsers(users);

  console.log("Updated users:", users);
  res.json({ success: true, message: "Signup successful" });
});

// login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let users = loadUsers();

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

// LOCAL only
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// VERCEL
module.exports = app;
