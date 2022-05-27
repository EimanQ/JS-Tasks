const valueA = `Ромашка`.toLowerCase(),
    valueB = `Мошкара`.toLowerCase(),
    obj = {};
let rez = 0;
for (let i = 0; i < valueA.length; i++) {
    if (valueA.length < valueB.length) obj.key = false;
    else {
        if (valueB.includes(valueA[i])) rez += 1;
        else obj.key = false;
    }
}
(rez < valueA.length) ? obj.key = false: obj.key = true;
console.log(obj)