const {
    Task
} = require(`./service/service`);
const express = require("express");
const {
    request
} = require("express");
const app = express();
app.use(express.json());
app.get(`/:id`, (request, response) => {
    const {
        id
    } = request.params;
    const solution = new Task();
    response.send(solution.findId(id));
})

app.post(`/`, (request, response) => {
    const reqBody = request.body;
    const solut = new Task();
    response.send(solut.createTask(reqBody));
})

app.put(`/:id`, (request, response) => {
    const {
        id
    } = request.params;
    const soluti = new Task();
    response.send(soluti.updateTask(id));
})

app.delete(`/`, (request, response) => {
    const reqBody = request.body;
    const soluti = new Task();
    response.send(soluti.deleteTask(reqBody));
})

const port = 3000;

app.listen(port, () => {
    console.log(`All is okay, your port is ${port}`);
})