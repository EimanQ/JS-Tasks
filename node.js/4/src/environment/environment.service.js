const {
    json
} = require("body-parser");
const fs = require("fs");


class Task {

    constructor() {
        this.filePath = 'C:/Users/Янис/Desktop/JS-Tasks/node.js/4/src/storage/data.json';
    }

    readJSON = () => {
        const parsedData = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
        return parsedData
    }

    getEnvironmentById = (id) => {
        const parsedData = this.readJSON();
        return parsedData.filter((key) => key.id === id);
    }

    getAllEnvironment = () => {
        return this.readJSON()
    }

    postNewEnvironment = (reqBody) => {
        const parsedData = this.readJSON();
        if (!reqBody) throw new Error(`Not Found`)
        if (!(reqBody.hasOwnProperty(`label`) && reqBody.hasOwnProperty(`category`) && reqBody.hasOwnProperty(`priority`))) throw new Error(`Has no property`);
        parsedData.push({
            numb_id: parsedData.length + 1,
            ...reqBody
        });
        fs.writeFileSync(this.filePath, JSON.stringify(parsedData));
        return parsedData;
    }

    putNewEnvironment = (idData) => {
        const parsedData = this.readJSON();
        parsedData.map((key) => {
            return {
                "id": `${idData}`,
                "label": key.label,
                "category": key.category,
                "priority": key.priority
            }
        });
        fs.writeFileSync(this.filePath, JSON.stringify(parsedData));
        return parsedData;
    }
}



module.exports = Task