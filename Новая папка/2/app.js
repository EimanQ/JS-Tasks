class WordString {
    constructor(word) {
        this.word = word;
    }

    reverseString = () => {
        const newWord = this.word.split(``).reverse().join(``);
        return newWord
    }

    upperFirst = () => {
        const arrToRet = [];
        for (let i = 0; i < this.word.length; i++) {
            if (i === 0) arrToRet.push(this.word.split(``)[i].toUpperCase());
            else arrToRet.push(this.word.split(``)[i]);
        }
        return arrToRet.join(``);
    }

    upperEvery = () => {
        const arrToRetSec = [],
            arrToCheck = this.word.split(``);
        for (let i = 0; i < arrToCheck.length; i++) {
            if (i === 0) arrToRetSec.push(arrToCheck[i].toUpperCase());
            else if (arrToCheck[i - 1] === ` `) arrToRetSec.push(arrToCheck[i].toUpperCase());
            else arrToRetSec.push(arrToCheck[i]);
        };
        return arrToRetSec.join(``);
    }
}

const word = new WordString(`янис хениалне`);
console.log(word.reverseString());
console.log(word.upperEvery());
console.log(word.upperFirst());