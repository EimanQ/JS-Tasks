const arrOfStr = [`I`, `like`, `to`, `learn`, `something`, `new`];

const checkLengthOfArr = (arr) => {
    if (arr.length === 0) throw new Error(`Empty array`);
    return arr
}


const convertToStr = (arr) => {
    const arrForConvert = checkLengthOfArr(arr);
    return arrForConvert.join(` `);
}

console.log(convertToStr(arrOfStr));