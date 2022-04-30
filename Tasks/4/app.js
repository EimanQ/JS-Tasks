const valueA = +prompt();
const numb = valueA;
let result = ``;

if (numb === 1) {
    result = `Весна`;
} else if (numb === 2) {
    result = `Лето`;
} else if (numb === 3) {
    result = `Осень`;
} else if (numb === 4) {
    result = `Зима`;
} else {
    console.log(`Некорректный ввод`);
}

console.log(result);