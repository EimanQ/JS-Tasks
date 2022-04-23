const time = +prompt(`Введите время `);

if (time < 60) {
    console.log(`Будет следующее время 0 часов ${time} минут`);
} else {
    console.log(`Будет следующее время ${Math.floor(time / 60)} часов ${time % 60} минут`)
}
