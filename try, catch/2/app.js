const newArrForFilling = [];

const constructNewArr = (array) => {
    for (let i = 0; i < 5; i++) {
        const value = +prompt();
        array.push(value);
    }
    return array;
}

const checkForNumberArrEls = (array) => {
    const arrayForCheck = constructNewArr(array);
    const checkedArr = [];
    for (let i = 0; i < arrayForCheck.length; i++) {
        if (isNaN(arrayForCheck[i])) throw new Error(`Some values are not a number!`);
        checkedArr.push(arrayForCheck[i]);
    }
    return checkedArr;
}

const checkForArrLength = (array) => {
    try {
        const arrLengthArr = checkForNumberArrEls(array);
        if (arrLengthArr.length === 0) throw new Error(`Your array is empty!`);
        return arrLengthArr
    } catch (e) {
        return e;
    }
}

console.log(checkForArrLength(newArrForFilling));