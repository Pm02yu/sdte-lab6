const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("NO_TWO");
});

module.exports = app;
