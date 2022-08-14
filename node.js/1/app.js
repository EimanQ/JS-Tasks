const express = require("express");
const app = express();
const port = 3000;
const {
    Task
} = require("./src/task");

app.get(`/`, (request, response) => {
    const solution = new Task();
    response.send(solution.taskFunc);
});
app.get(`/about`, (request, response) => response.send(`webpage: About`));
app.get(`/contact`, (request, response) => response.send(`webpage: Contact`));
app.get(`/:id`, (request, response) => {
    try {
        const {
            id
        } = request.params;
        const sol = new Task();
        response.send(sol.getTask(id));
    } catch (e) {
        response.status(404).send(e.message);
    }
})

app.listen(port, () => {
    console.log(`Hello world`);
})