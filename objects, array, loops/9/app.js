const arr = [1, 2, 3, 4, 5, 6],
    obj = {};

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) obj[`${i}`] = false;
    else obj[`${i}`] = true;
}
console.log(obj)
