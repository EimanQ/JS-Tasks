
const valueC = +prompt(`Введите трёхзначное число `);
let x1, x2, x3, x4;

x1 = Math.trunc(valueC / 1000);
x2 = Math.trunc((valueC - x1 * 1000) / 100);
x3 = Math.trunc(((valueC - x1 * 1000) - x2 * 100) / 10);
x4 = Math.trunc(((valueC - x1 * 1000) - x2 * 100) - x3 * 10);
(x1 % 2 === 0) ? console.log(`Число ${x1} чётное`) : console.log(`Число ${x1} не чётное`);
(x2 % 2 === 0) ? console.log(`Число ${x2} чётное`) : console.log(`Число ${x2} не чётное`);
(x3 % 2 === 0) ? console.log(`Число ${x3} чётное`) : console.log(`Число ${x3} не чётное`);
(x4 % 2 === 0) ? console.log(`Число ${x4} чётное`) : console.log(`Число ${x4} не чётное`);

if (isNaN(valueC)) {
    console.clear()
    alert(`Введённый тип данных не явлеяется верным!`);
    console.log(`Введите значение ещё раз`);
}