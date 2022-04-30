const valueA = +prompt();
let x1, x2, x3;

x1 = Math.trunc(valueA / 100);
x2 = Math.trunc((valueA - x1 * 100) / 10)
x3 = Math.trunc((valueA - x1 * 100) - x2 * 10);

console.log(`Сумма чисел ${x1} ${x2} ${x3} будет равна ${x1 + x2 + x3}`); 