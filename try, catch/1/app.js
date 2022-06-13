const arrForFilling = [];

const askNumbElOfArr = (value) => {
    value = +prompt();
    return value;
};

const checkElForNumb = (element) => {
    const numberOfArrEl = askNumbElOfArr(element);
    if (isNaN(numberOfArrEl)) throw new Error(`It's not a number`);
    return numberOfArrEl
};

const constructNewArr = (arrEl) => {
    const newArrEl = checkElForNumb(arrEl);
    const newArr = [];
    for (let i = 0; i < newArrEl; i++) {
        newArr.push(Math.floor(Math.random() * 50));
    }
    return newArr;
}

const filterNumbOfArr = (array) => {
    const arrForCheck = constructNewArr(array);
    const arrForReturn = arrForCheck.filter(key => key > 10 && key < 100);
    return arrForReturn;
}

const checkLengthOfArr = (array) => {
    try {
        const arrLengthCheck = filterNumbOfArr(array)
        if (arrLengthCheck.length === 0) throw new Error(`Your array is empty`);
        return arrLengthCheck
    } catch (e) {
        return e;
    }
}

console.log(checkLengthOfArr(arrForFilling));