const valueX = prompt();
let strL = '';

for (i = 0; i < valueX.length; i++) {
    if (isNaN(valueX[i])) {
        if (valueX[i] === valueX[i].toLowerCase()) {
            strL += valueX[i];
        } else { }
    } else { }
}
console.log(strL);
console.log(strL.length);