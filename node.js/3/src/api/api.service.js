const fs = require('fs');
const arrObj = JSON.parse(fs.readFileSync('../storage/data.JSON'));

class Task {
    constructor() {
        this.arrObj = arrObj;
    }

    findId = (id) => {
        const idToRet = this.arrObj.filter((key) => key.id === +id)
        if (!idToRet) throw new Error(`User not found`);
        else return idToRet
    }
    postNewItem = (data) => {
        if (!data) throw new Error(`Not Found`)
        if (!(data.hasOwnProperty(`name`) && data.hasOwnProperty(`surname`) && data.hasOwnProperty(`email`) && data.hasOwnProperty(`pwd`))) throw new Error(`Has no property`);
        this.arrObj.push({
            id: this.arrObj.length + 1,
            ...data
        });
        return this.arrObj;
    }

    updateItems = (idData) => {
        if (!idData) throw new Error(`Error,ID is not valid`);
        return this.arrObj.map((key) => {
            return {
                id: idData,
                name: key.name,
                surname: key.surname,
                email: key.email,
                pwd: key.pwd
            }
        });
    }

    removeItem = (idData) => {
        if (!idData) throw new Error(`Error, ID is not valid`);
        return this.arrObj.filter((key) => key.id != idData);
    }
}

module.exports = Task