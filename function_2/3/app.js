const strForReplace = "HTML JavaScript PHP";

const checkLengthOfArr = (str) => {
    if (str.length === 0) throw new Error(`Empty array`);
    return str
}


const convertToStr = (str) => {
    const strForConvert = checkLengthOfArr(str);
    return strForConvert.replaceAll(` `, `-`);
}

console.log(convertToStr(strForReplace));