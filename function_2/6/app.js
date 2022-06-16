const emailStr = `y.khenilane13@gmail.com`;

const checkLengthOfEmail = (str) => {
    const strToArr = str.split(``);
    if (strToArr.length === 0) throw new Error(`E-mail string is empty`);
    return strToArr
}

const checkToAtInEmail = (str) => {
    try {
        const arrToCheck = checkLengthOfEmail(str);
        if (arrToCheck.includes(`@`)) return true
        throw new Error(`Its not an email!`)
    } catch (e) {
        return e;
    }
}

console.log(checkToAtInEmail(emailStr));