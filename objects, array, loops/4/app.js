const n = +prompt(),
    obj = {};

for (let i = 0; i < n; i++) {
    obj[`key${i}`] = prompt().trim().toLowerCase();
}
for (let value in obj) {
    if (obj[value] == `minsk`) console.log(true);
    else console.log(false);
}
