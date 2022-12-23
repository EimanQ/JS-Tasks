var arrays = ["HI", "code", "Hi", "ilikecode", "ts", "hi"];
var res = [];
for (var i = 0; i < arrays.length; i++) {
    if (!res.includes(arrays[i]))
        res.push(arrays[i]);
    continue;
}
console.log(res);
