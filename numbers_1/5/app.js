const valueA = +prompt(`Введите количество лет собаки, чтобы узнать сколько это человеческих лет: `)


if (valueA === 0) {
    console.log(`Не смешно, Ань!(x_x) `)
}
else if (valueA >= 0.1 && valueA <= 2) {
    console.log(`Количество лет собаки в человеческих годах будет равняться = ${valueA * 10.5} лет`);
} else {
    console.log(`Количество лет собаки в человеческих годах будет равняться = ${valueA * 4} лет`);
}