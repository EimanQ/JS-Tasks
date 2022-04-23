const valueM = +prompt(`Введите население `);

if (valueM <= 0) {
    console.log(`Хватит меня проверять!!!!!!!!!!`);
} else if (valueM % 2 === 0) {
    console.log(`Количество выживших = ${(valueM / 2)}`);
}
else if (valueM % 2 === 1) {
    console.log(`Количество выживших = ${Math.ceil(valueM / 2)}`);
}