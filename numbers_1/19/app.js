const valueC = +prompt(`Введите трёхзначное число `);
let x1, x2, x3, x4;

x1 = Math.trunc(valueC / 1000);
x2 = Math.trunc((valueC - x1 * 1000) / 100);
x3 = Math.trunc(((valueC - x1 * 1000) - x2 * 100) / 10);
x4 = Math.trunc(((valueC - x1 * 1000) - x2 * 100) - x3 * 10);

console.log(`Цифра в позиции тысяч равна ${x1}`);
console.log(`Цифра в позиции сотен равна ${x2}`);
console.log(`Цифра в позиции десятков равна ${x3}`);
console.log(`Цифра в позиции единиц равна ${x4}`);

// Надеюсь это не говнокод :((((