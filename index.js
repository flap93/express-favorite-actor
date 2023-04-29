const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/about.html");
});

app.listen(3000);
