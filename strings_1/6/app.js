const valueX = `Я учу JavaScript`;

console.log(`Длина строки ${valueX.length}`);

console.log(`Вырезаем slice "учу" ${valueX.slice(1, 5)}`);

console.log(`Вырезаем substring "JavaScript" ${valueX.substring(5, 16)}`);

console.log(`Вырезаем substr "учу" ${valueX.substr(2, 3)}`);

console.log(`Позиция подстроки ${valueX.indexOf('учу')}`);

