const valueX = prompt();
let rez = ``;

for (let i = 0; i < valueX.length; i++) {
    if (valueX[i] == valueX[i].toUpperCase()) {
        rez += valueX[i].toLowerCase();
    } else {
        rez += valueX[i].toUpperCase();
    }

}
console.log(rez);