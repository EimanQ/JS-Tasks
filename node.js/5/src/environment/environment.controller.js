const express = require("express");
const {
    postNewBody
} = require("./environment.service")
const router = express.Router();


router.get("/", (request, response) => {
    response.send(`Hello world!`);
})

router.post("/", async (requset, response) => {
    const reqBody = requset.body;
    const task = await postNewBody(reqBody);
    response.send(task);
})

module.exports = router;