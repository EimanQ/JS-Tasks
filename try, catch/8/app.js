const userPass = `1234asd5678`;

const checkPassLength = (pass) => {
    const makeArrFromPass = pass.split(``);
    if (makeArrFromPass.length < 8) throw new Error(`Error, password length must be from 8 symbols`);
    return pass;
}

const hideSymbOfPass = (pass) => {
    try {
        const hideStrOfPass = checkPassLength(pass);
        return hideStrOfPass.replaceAll(/[0-9|a-z|A-Z]/g, `*`);
    } catch (e) {
        return e;
    }
}

console.log(hideSymbOfPass(userPass));