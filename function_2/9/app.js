const jsonStr = JSON.parse(`[1,2,3,4,5]`);

const checkTypeOfVariable = (variable) => {
    if (typeof variable === `object`) return variable;
    throw new Error(`It's not an object`);
}

const checkIsNanOfArr = (arr) => {
    const variableToCheckIsNan = checkTypeOfVariable(arr);
    for (let i = 0; i < variableToCheckIsNan.length; i++) {
        if (isNaN(variableToCheckIsNan[i])) throw new Error(`Your value in array isn't a number`);
        continue
    }
    return variableToCheckIsNan;
}

const constructArrFromEven = (arr) => {
    try {
        const loadArrFromPrevCheck = checkIsNanOfArr(arr);
        const arrWithEvenNumber = loadArrFromPrevCheck.filter(key => key % 2 === 0);
        return arrWithEvenNumber;
    } catch (e) {
        return e;
    }
}

console.log(constructArrFromEven(jsonStr));