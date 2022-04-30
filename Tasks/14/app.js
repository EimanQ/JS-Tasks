const valueA = +prompt().trim();
const valueB = +prompt().trim();
const valueC = +prompt().trim();
const valueD = +prompt().trim();
const valueE = +prompt().trim();
const valueF = +prompt().trim();
let arr = [valueA, valueB, valueC, valueD, valueE, valueF];

if (isNaN(valueA, valueB, valueC, valueD, valueE, valueF)) {
    console.log(`Ошибка`);
} else {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(`${arr[i]} - чётное`);
        } else {
            console.log(`${arr[i]} - нечётное`);
        }
    }
}
