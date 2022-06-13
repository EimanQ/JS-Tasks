const str = `Web Development Tutorial`.split(` `);

const doLengthStr = (word) => {
    const newStr = word;
    let rez = word[0];
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].length > rez.length) rez = newStr[i];
        else continue
    }
    return rez;
}
console.log(doLengthStr(str));