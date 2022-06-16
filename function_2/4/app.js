const arrForReplace = [`HTML`, `JavaScript`, `PHP`];

const checkingArrForNan = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) continue
        throw new Error(`Your value in array is number!`);
    }
    return arr;
}

const joinArrValueToStr = (arr) => {
    try {
        const arrForJoin = checkingArrForNan(arr);
        return arrForJoin.join(` `)
    } catch (e) {
        return e
    }
}
console.log(joinArrValueToStr(arrForReplace));