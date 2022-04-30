const valueA = +prompt().trim();
const valueB = +prompt().trim();
const valueC = +prompt().trim();
let sum = 0;
let arr = [valueA, valueB, valueC];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    } else { }
}

console.log(sum);