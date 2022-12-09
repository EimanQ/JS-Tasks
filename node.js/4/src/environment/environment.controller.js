const express = require("express");
const Task = require("./environment.service");

const router = express.Router();

router.get("/", (request, response) => {
    const solution = new Task();
    response.send(solution.getAllEnvironment());
})

router.get("/:id", (request, response) => {
    const {
        id
    } = request.params;
    const solution = new Task();
    response.send(solution.getEnvironmentById(id));
})

router.post("/post", (request, response) => {
    const reqBody = request.body;
    const solution = new Task();
    response.send(solution.postNewEnvironment(reqBody));
})

router.put("/put/:id", (request, response) => {
    const {
        id
    } = request.params;
    const solution = new Task();
    response.send(solution.putNewEnvironment(id));
})

module.exports = router;