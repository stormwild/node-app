require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const { PORT } = process.env;

const app = express();

app.use(morgan("tiny")); // combined
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to Globomantics",
    data: ["a", "b", "c"],
  });
});

app.listen(PORT, () => {
  debug(`Listening on port ${chalk.green(PORT)}`);
});
