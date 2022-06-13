const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 86, 4, 3, 22, 23];
const allEvenNumberSqrt = (array) => {
    let evenArray = array.filter(key => key % 2 === 0)
        .map(key => key ** 2);
    return evenArray;
}
console.log(allEvenNumberSqrt(arr));