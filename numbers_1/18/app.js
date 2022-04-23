const valueC = +prompt(`Введите трёхзначное число `);
let x1, x2, x3;

x1 = Math.trunc(valueC / 100);
x2 = Math.trunc((valueC - x1 * 100) / 10);
x3 = Math.trunc(valueC - (x1 * 100 + x2 * 10));

console.log(`Сумма чисел внутри трёхзначного числа будет = ${x1 + x2 + x3}`);
console.log(`Произведение чисел внутри трёхзначного числа будет = ${x1 * x2 * x3}`);