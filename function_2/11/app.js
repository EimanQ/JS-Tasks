const mathArr = [10, 20, 30, 50, 235, 3000];

const doIsNanCheck = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) throw new Erorr(`Your value is not a number`)
        continue
    }
    return arr;
};

const doExceptionsOfNumber = (arr) => {
    try {
        const arrOfNumber = doIsNanCheck(arr);
        const arrToReturn = [];
        for (let i = 0; i < arrOfNumber.length; i++) {
            let checkException = [arrOfNumber[i]];
            checkException = checkException.join(``);
            if (checkException[0].includes(`1`) || checkException[0].includes(`2`) || checkException[0].includes(`5`)) arrToReturn.push(Number(checkException));
            continue
        }
        return arrToReturn;
    } catch (e) {
        return e;
    }
};

console.log(doExceptionsOfNumber(mathArr));