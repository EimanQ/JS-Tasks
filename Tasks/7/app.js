const valueA = +prompt();

if (isNaN(valueA)) {
    console.log(`Это не число`)
} else if (valueA > 0) {
    console.log(`Больше нуля`)
} else if (valueA === 0) {
    console.log(`Это ноль`);
} else {
    console.log(`Меньше нуля`);
}