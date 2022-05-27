const valueA = +prompt(),
    obj = {},
    arr = Array.from({ length: valueA }, () => Math.floor(Math.random() * 10));
obj.array = arr;
console.log(obj);