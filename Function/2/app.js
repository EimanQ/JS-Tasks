const value = 3;

const doFactorial = (numb) => {
    let rez = 1;
    for (let i = 1; i <= numb; i++) {
        rez *= i;
    }
    return rez;
}

console.log(doFactorial(value));
