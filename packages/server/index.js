const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS MIDDLEWARE
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, Authorization"
  );
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

//AUTH MIDDLEWARE
app.use((req, res, next) => {
  if (req.path == "/auth/login") {
    return next();
  }
  const token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ msg: err.message });
  }
  next();
});

app.get("/auth/login", (req, res) => {
  const token = jwt.sign({ username: "Demo" }, process.env.JWT_SECRET, {
    expiresIn: 60,
  });
  res.json({ token: token });
});

app.get("/api/ping", (req, res) => {
  res.json({ msg: "pong" });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
