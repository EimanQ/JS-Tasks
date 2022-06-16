const dataPass = `12345678`;

const checkLengthOfPass = (str) => {
    if (str.length < 8) throw new Error(`Password must be longer!`);
    return str
}

const hidePassword = (str) => {
    try {
        const passToHide = checkLengthOfPass(str);
        return passToHide.replaceAll(/[0-9|A-Z|a-z]/g, `*`);
    } catch (e) {
        return e;
    }
}
console.log(hidePassword(dataPass));