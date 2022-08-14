const arrObj = require("../storage/data");

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
}

module.exports = Task