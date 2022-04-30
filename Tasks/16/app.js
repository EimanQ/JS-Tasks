const valueA = +prompt().trim();

if (valueA % 4 === 0) {
    if (valueA % 100 === 0) {
        console.log(`NO`);
    } else console.log(`Yes`);
} else console.log(`No`);