const valueA = `Privet`;
let valueB = valueA.split(``);
let arr = [];

for (let i = valueB.length - 1; i >= 0; i--) {
    arr.push(valueB[i]);
}
console.log(arr.join(``));