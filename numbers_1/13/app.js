const valueM = +prompt(`Введите число сантиметров `);

if (valueM <= 0) {
    console.log(`Хватит меня проверять!`);
} else {
    console.log(`Количество метров с сантиметрах следующее = ${Math.round(valueM / 100)} м.`)
}