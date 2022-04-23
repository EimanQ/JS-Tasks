const valueN = +prompt(`Введите число школьников `);
const valueM = +prompt(`Введите число мандарин `);

if (valueM % valueN === 0) {
    console.log(`Доставшееся число мандарин ${valueM / valueN}, количество в корзине ${valueM % valueN}`);
} else {
    console.log(`Доставшееся число мандарин 0, количество в корзине ${valueM % valueN}`);
}