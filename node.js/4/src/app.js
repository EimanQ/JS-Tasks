const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const environment = require("./environment/environment.controller");

app.use(bodyParser.json());

app.use("/environment", environment);

app.use((err, request, response, next) => {
    response.status(500).send(err.message);
})

module.exports = app;