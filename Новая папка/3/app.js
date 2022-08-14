class MathСalculation {
    constructor(mathValue) {
        this.mathValue = mathValue;
    }

    checkSumOfAllPosNumber = () => {
        let numberString = 0;
        for (let i = 0; i < this.mathValue.length; i++) {
            if (this.mathValue[i] > 0) {
                numberString += this.mathValue[i];
            }
            continue
        }
        return numberString
    }
}

const newNumber = new MathСalculation([1, 2, 3, 4]);
console.log(newNumber.checkSumOfAllPosNumber());
console.log();