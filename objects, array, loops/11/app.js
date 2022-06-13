const obj = {
        a: +prompt(),
        b: +prompt(),
        c: +prompt(),
        d: +prompt(),
        e: +prompt(),
    },
    arr = [];

for (let key in obj) {
    arr.push(obj[key]);
}
console.log(obj)