const obj = {},
    fib = 10,
    arr = [];

for (let i = 0; i < fib; i++) {
    if (i === 0 || i === 1) {
        arr.push(i)
    } else if (i === 2) {
        arr.push(i - 1);
    } else arr.push(arr[i - 1] + arr[i - 2]);
}
obj.arr = arr;
console.log(obj)