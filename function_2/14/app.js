const objWithVariable = {
    key: 1,
    key2: 2,
    key3: `as00d`,
    key4: `$`,
    key5: 4,
};
const doubleAllNumbers = (obj) => {
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            const variableToDouble = obj[key];
            obj[key] = variableToDouble * 2;
        }
    }
    return obj;
}
console.log(doubleAllNumbers(objWithVariable));