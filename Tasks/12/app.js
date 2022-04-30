const valueA = +prompt().trim();

if (valueA <= 13) {
    console.log(`Детство`)
} else if (valueA >= 14 && valueA <= 24) {
    console.log(`Молодость`);
} else if (valueA >= 25 && valueA <= 59) {
    console.log(`Зрелость`);
} else {
    console.log(`Старость`);
}