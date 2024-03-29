const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routeUser = require("./controller/controller");

const app = express();

app.use(
  cors({
    // origin: "http://localhost:3001",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use("/user", routeUser);

app.use((err, _req, res, _next) => {
  res.send(err.message);
});

module.exports = { app };
