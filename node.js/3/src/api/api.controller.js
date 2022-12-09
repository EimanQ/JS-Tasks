const express = require("express");
const Task = require("./api.service");
const {
    validationEmail
} = require("../helper/validation");

const router = express.Router();

router.get("/", (request, response) => {
    response.send(`Ok`);
})

router.get("/:id", (request, response) => {
    try {
        const {
            id
        } = request.params;
        const solution = new Task();
        response.send(solution.findId(id));
    } catch (e) {
        response.status(404).send(e.message);
    }
})

router.post("/", validationEmail, (request, response) => {
    try {
        const reqBody = request.body;
        const solution = new Task();
        response.status(200).send(solution.postNewItem(reqBody));
    } catch (e) {
        response.status(404).send(e.message);
    }
})

router.put("/:id", (request, response) => {
    try {
        const {
            id
        } = request.params;
        const solution = new Task()
        response.status(200).send(solution.updateItems(id));
    } catch (e) {
        response.status(404).send(e.message);
    }
})

router.delete("/:id", (request, response) => {
    try {
        const {
            id
        } = request.params;
        const solution = new Task()
        response.status(200).send(solution.removeItem(id));
    } catch (e) {
        response.status(404).send(e.message);
    }
})


module.exports = router;