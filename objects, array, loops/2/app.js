const obj = {};
const n = +prompt(),
    arr = [];
let rez = 0
for (let i = 0; i < n; i++) {
    let a = +prompt();
    arr.push(a);
}
for (let i = 0; i < arr.length; i++) {
    rez += arr[i];
}
obj.avg = rez;
console.log(obj);