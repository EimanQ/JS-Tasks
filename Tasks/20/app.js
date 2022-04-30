const valueA = +prompt();
const valueB = +prompt();
const valueC = prompt(`Znak`);

if (isNaN(valueA, valueB)) {
    console.log(`error`);
} else {
    if (valueC == `/`) {
        if (valueA === 0 || valueB === 0) {
            console.log(`Delit na 0 nelzya`);
        } else console.log(`Delenie ${valueA / valueB}`);
    } else if (valueC == `*`) {
        console.log(`Umozhenie ${valueA * valueB}`);
    } else if (valueC == `+`) {
        console.log(`Summa ${valueA + valueB}`);
    } else if (valueC == `-`) {
        console.log(`Vichitanie ${valueA - valueB}`);
    } else console.log(`error`);
}