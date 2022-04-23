const ValueX = +prompt(`Введите своё место`);

if (ValueX === 0) {
    console.log(`Вы сегодня идёте пешком)))))`);
} else if (ValueX >= 1 && ValueX <= 4) {
    console.log('Ваше место в 1 купе');
} else if (ValueX >= 5 && ValueX <= 8) {
    console.log('Ваше место в 2 купе');
} else if (ValueX >= 9 && ValueX <= 12) {
    console.log('Ваше место в 3 купе');
} else if (ValueX >= 5 && ValueX <= 8) {
    console.log('Ваше место в 2 купе');
} else if (ValueX >= 9 && ValueX <= 12) {
    console.log('Ваше место в 3 купе');
} else if (ValueX >= 13 && ValueX <= 16) {
    console.log('Ваше место в 4 купе');
} else if (ValueX >= 17 && ValueX <= 20) {
    console.log('Ваше место в 5 купе');
} else if (ValueX >= 21 && ValueX <= 24) {
    console.log('Ваше место в 6 купе');
} else if (ValueX >= 25 && ValueX <= 28) {
    console.log('Ваше место в 7 купе');
} else if (ValueX >= 29 && ValueX <= 32) {
    console.log('Ваше место в 8 купе');
} else if (ValueX >= 33 && ValueX <= 36) {
    console.log('Ваше место в 9 купе');
}