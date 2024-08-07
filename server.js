const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all routes

const data = require("./db.json");

app.get("/solutions", (req, res) => {
  res.json(data.solutions);
});

app.get("/letters", (req, res) => {
  res.json(data.letters);
});

// Use the environment variable PORT or default to 3100
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
