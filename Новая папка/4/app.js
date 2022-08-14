class Fibonacci {
    constructor(febLength) {
        this.febLength = febLength;
    }

    checkFebNumb = () => {
        if (!Number.isInteger(this.febLength)) throw new Error(`It's not a number`);
        if (this.febLength <= 0) throw new Error(`Incorrect value`);
        return true;
    }

    doFebSer = () => {
        try {
            const arrToRet = [];
            if (this.checkFebNumb()) {
                for (let i = 0; i < this.febLength; i++) {
                    if (i === 0 || i === 1) arrToRet.push(i);
                    else arrToRet.push(arrToRet[i - 1] + arrToRet[i - 2]);
                }
                return arrToRet;
            }
        } catch (e) {
            return e.message;
        }
    }
}

const showFeb = new Fibonacci(8);
console.log(showFeb.doFebSer());
console.log();