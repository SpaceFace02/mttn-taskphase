const express = require("express");
const bodyParser = require("body-parser");
const papersRouter = require("./routes/papersRoutes");
const path = require("path");

const app = express();

// Trusting proxies which heroku uses to modify requests. At the top is a must.
app.enable("trust proxy");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use("/papers", papersRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
