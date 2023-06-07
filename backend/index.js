const express = require("express");
const mongoos = require("mongoose");
const app = express();
const http = require("http");
const cors = require("cors");
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
