const valueA = +prompt().trim();
const valueB = +prompt().trim();
const valueC = +prompt().trim();

let x1 = valueA + valueB;
let x2 = valueA + valueC;
let x3 = valueB + valueC;


if (valueA < x3) {
    if (valueB < x2) {
        if (valueC < x1) {
            console.log(`Yes`);
        } else console.log(`No`);
    } else console.log(`No`);
} else console.log(`No`);
