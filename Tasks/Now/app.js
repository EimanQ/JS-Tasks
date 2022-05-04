// const valueA = `Hanna`.toLowerCase().trim().split(``);
// valueB = valueA.reverse();

// (valueA.join(``) === valueB.join(``)) ? console.log(`Является`) : console.log(`Не является`);


const arr = [1, 2, 3, 4, 5, 6];
let pr = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        pr *= arr[i];
    }
}
console.log(pr);