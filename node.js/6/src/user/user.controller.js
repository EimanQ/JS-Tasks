const express = require("express");
const {getAllStudents, createUser, updateUser, deleteUser} = require("./user.service")
const {validatePatch} = require("../helper/validation");
const route = express.Router();

route.get("/", async (request, response) => {
    const gotAllStudents = await getAllStudents();
    response.status(200).send(gotAllStudents);
})

route.post("/", async (request, response) => {
    try {
        const {name, surname, birth, city, age} = request.body;
        const postedUser = await createUser(name, surname, birth, city, age);
        response.status(200).send(postedUser)
    } catch (error) {
        response.status(404).send(error)
    }
})

route.patch("/:id/:infoID", validatePatch, async (request, response) => {
    try {
        const {id, infoID} = request.params;
        const updatedUser = await updateUser(id, infoID, request.body);
        response.status(200).send(updatedUser);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

route.delete("/:id/:infoID", async (request, response) => {
    try {
        const {id, infoID} = request.params;
        const deletedUser = await deleteUser(id, infoID);
        response.status(200).send(deletedUser);
    } catch (error) {
        response.status(404).send(error.message);
    }
})


module.exports = route;