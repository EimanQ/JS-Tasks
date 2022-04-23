const value1 = +prompt(`Введите первое целое число: `);
const value2 = +prompt(`Введите второе целое число: `);
const value3 = +prompt(`Введите третье целое число: `);
const value4 = +prompt(`Введите четвёртое целое число: `);
const value5 = +prompt(`Введите пятое целое число: `);

console.log(`Максимальное число ${Math.max.apply(null, [value1, value2, value3, value4, value5])}`)
console.log(`Минимальное число ${Math.min.apply(null, [value1, value2, value3, value4, value5])}`)