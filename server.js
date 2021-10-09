const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("tiny")); // combined
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.send("Hello App");
});

app.listen(3000, () => {
  debug(`Listening on port ${chalk.green("3000")}`);
});
