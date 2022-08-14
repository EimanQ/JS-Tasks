const bodyParser = require("body-parser");
const express = require("express");
const api = require("./api/api.controller");
const posts = require("./posts/posts.controller");


const app = express();

app.use(bodyParser.json());

app.use("/api", api);

app.use("/posts", posts);

app.use((err, request, response, next) => {
    response.status(500).send(err.message);
})

module.exports = app;