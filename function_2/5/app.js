const arrForUniqeNumber = [1, 2, 3, 3, 1, 2, 5];

const checkingArrForNan = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) continue
        throw new Error(`Your value ${arr[i]} in array is string!`);
    }
    return arr;
}

const doUniqueNumberOfArray = (arr) => {
    try {
        const arrForUnique = checkingArrForNan(arr.sort());
        const uniqueArr = [];
        for (let i = 0; i < arrForUnique.length; i++) {
            if (arrForUnique[i] === arrForUnique[i + 1] || arrForUnique[i] === arrForUnique[i - 1]) continue
            uniqueArr.push(arrForUnique[i]);
        }
        return uniqueArr
    } catch (e) {
        return e
    }
}

console.log(doUniqueNumberOfArray(arrForUniqeNumber));