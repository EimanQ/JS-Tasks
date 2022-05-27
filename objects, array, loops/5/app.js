const obj = {
        a: 1,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 4,
        g: 9,
    },
    arr = [];

for (let key in obj) {
    arr.push(obj[key])
    delete obj[key]
}
arr.sort();
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) continue
    else obj[`key${ i}`] = arr[i]
}
console.log(obj)
