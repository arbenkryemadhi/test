const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hi there<h1>");
});

app.listen(3000);
