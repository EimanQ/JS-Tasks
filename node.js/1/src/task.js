const {
    newObj
} = require("./environment");

class Task {
    constructor() {
        this.arr = [1, 2, 3, 2, 1, 2, 3, 4, 5, 6, 9, 6].sort();
        this.newObj = newObj;
    }
    taskFunc = () => {
        const arrToRet = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] != this.arr[i + 1] && this.arr[i] != this.arr[i - 1]) arrToRet.push(this.arr[i]);
        };
        return arrToRet;
    };
    splitFunc = (id) => {
        const number = +id;
        const arrayF = [];
        const arrayS = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (arrayF.length === number || arrayF.length > number) arrayS.push(this.arr[i]);
            else arrayF.push(this.arr[i]);
        }
        return `array (length ${number}) = [${arrayF}]; array(length ${this.arr.length - number}) = [${arrayS}]`;
    }
    getTask = (id) => {
        const returnRes = newObj.filter((key) => key.id === id);
        if (returnRes.length === 0) throw new Error(`Not Found`);
        return returnRes;
    }
}

module.exports = {
    Task
};