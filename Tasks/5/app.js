const valueA = prompt();

if (isNaN(valueA)) {
    console.log(`Это не число`);
} else {
    if ((valueA % 3 === 0)) {
        console.log(`Это число, остаток от деления на 3 равен 0`)
    } else {
        console.log(`Это число, остаток от деления на 3 не равен 0`)
    }
}