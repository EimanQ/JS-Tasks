const valueA = +prompt(`Введите занчение: `);

if (valueA === 0) {
    console.log(`Обратного числа не существует`)
} else {
    console.log(`Обратное число будет ${valueA ** -1}`)
}