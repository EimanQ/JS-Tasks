const obj = {
    'Коля': 1000,
    'Вася': 500,
    'Петя': 200,
    'Даша': 4000,
    'Наташа': 600,
}

for (let key in obj) {
    if (key === `Даша` || key === `Вася`) console.log(`${key}: ${obj[key]}`)
}