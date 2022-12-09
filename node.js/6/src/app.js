const express = require("express");
const user = require("./user/user.controller");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use("/user", user);


app.use((error, request, response, next) => {
    response.status(404).send(error.message);
})

module.exports = app;