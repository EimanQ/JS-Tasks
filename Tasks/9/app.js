const valueA = prompt().trim().toLowerCase();
const valueB = prompt().trim().toLowerCase();
let sum = 0;

for (let i = 0; i < valueA.length; i++) {
    if (valueA.length === valueB.length) {
        if (valueB.includes(valueA[i])) {
            sum += 1;
        } else {
            console.log(false);
            break;
        }
    } else {
        console.log(false);
        break;
    }
}

if (sum === valueA.length) {
    console.log(true);
} else { }
