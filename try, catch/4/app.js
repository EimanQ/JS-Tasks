const emailStr = `yaniskhenilanegmail.com`;

const checkStrForAt = (str) => {
    try {
        const checkForAt = /@/.test(str);
        if(checkForAt === true) return checkForAt;
        throw new Error(`That's not an e-mail addres`)
    } catch (e) {
        return e;
    }
}

console.log(checkStrForAt(emailStr));
