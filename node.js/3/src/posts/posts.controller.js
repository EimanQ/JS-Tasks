const express = require("express");
const PostTask = require("./posts.service");
const {
    validationKey
} = require("../helper/validation");

const router = express.Router();

router.get("/", (request, response) => {
    try {
        const postTask = new PostTask();
        response.send(postTask.getAllPosts());
    } catch (e) {
        response.status(404).send(e.message);
    }
});

router.get("/:id", (request, response) => {
    try {
        const {
            id
        } = request.params;
        const postTask = new PostTask();
        response.send(postTask.getPostById(id));
    } catch (error) {
        response.send(error.message);
    }
});

router.post("/", validationKey, (request, response) => {
    try {
        const reqBody = request.body;
        const postTask = new PostTask();
        response.status(200).send(postTask.postNewArg(reqBody));
    } catch (error) {
        response.status(404).send(error.message)
    }
})

router.put("/:id", (request, response) => {
    try {
        const {
            id
        } = request.params;
        const postTask = new PostTask();
        response.status(200).send(postTask.updatePostById(id, request.body));
    } catch (error) {
        response.status(404).send(error.message);
    }
})

router.delete("/:id", (request, response) => {
    const {
        id
    } = request.params;
    const postTask = new PostTask();
    response.send(postTask.deleteById(id));
})

module.exports = router;