const valueA = prompt().toLocaleLowerCase().trim();
let sum = 0;

for (let i = 0; i < valueA.length; i++) {
    if (valueA[i] === `a`) {
        sum += 1;
    } else if (valueA[i] === `e`) {
        sum += 1;
    } else if (valueA[i] === `i`) {
        sum += 1;
    } else if (valueA[i] === `o`) {
        sum += 1;
    } else if (valueA[i] === `u`) {
        sum += 1;
    } else { }
}

console.log(sum);   