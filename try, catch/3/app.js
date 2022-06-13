const emailStr = `yaniskhenilane@gmail.com`;

const checkStrForAt = (str) => {
    try {
        const arrForAtCheck = str.split(``);
        if (arrForAtCheck.includes(`@`)) return true;
        throw new Error(`Error, it's not a e-mail`);
    } catch (e) {
        return e;
    }
}

console.log(checkStrForAt(emailStr));