const arr = [`asd`, `asd`, `asd`, `asd`, `asd`];

const arrCheck = (array) => {
    let errorNumb = 0;
    for (let key of array) !isNaN(key) ? (errorNumb += 1) : null;
    if (errorNumb > 0) return false;
    return true;
}

const arrStr = (array) => {
    let value = arrCheck(array);
    if (value === true) return array.join(``);
    return `Error`
};

console.log(arrStr(arr));