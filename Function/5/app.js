const arr = [1, 2, 3, 4, 5, 6]
const checkIsnan = (Array) => {
    let rez = 0;
    for (let i = 0; i < Array.length; i++) {
        isNaN(Array[i]) ? (rez += 1) : null;
    }
    if (rez === 0) return true;
    return false;
}

const findMaxOfArray = (Array) => {
    let value = checkIsnan(Array);
    if (value == true) return Math.max(...Array);
    return `False`;
}

console.log(findMaxOfArray(arr));