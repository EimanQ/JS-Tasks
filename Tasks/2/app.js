const valueA = prompt().toLocaleLowerCase();
const arr = valueA.split(``).reverse();
const valueB = arr.join(``);

(valueA === valueB) ? console.log(true) : console.log(false);