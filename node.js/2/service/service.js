const {
    arrObjects
} = require(`./objects`);
class Task {
    constructor() {
        this.arrObjects = arrObjects;
    }
    findId = (id) => {
        const findIdArr = this.arrObjects.filter((key) => key.id === id);
        return findIdArr;
    }
    createTask = (data) => {
        this.arrObjects.push(data);
        return this.arrObjects
    }
    updateTask = (data) => {
        const updArr = this.arrObjects.map((key) => {
            return {
                "id": `${data}`,
                "label": `${data.toLowerCase()}`,
                "category": `${key.category}`,
                "priority": `${key.priority}`
            }
        });
        return updArr;
    }
    deleteTask = (data) => {
        const deleteKeyOfArr = this.arrObjects.filter((key) => key.id != data.id);
        return deleteKeyOfArr;
    }
}
module.exports = {
    Task
};