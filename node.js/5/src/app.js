const express = require("express");
const environment = require("./environment/environment.controller")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use("/environment", environment);

app.use((error, request, response, next) => {
    response.status(500).send(error);
})

module.exports = app;