const valueX = prompt();
let arr = valueX.split(`_`)
let rez = '';

for (let i = 0; i < arr.length; i++) {
    rez += arr[i][0].toUpperCase() + arr[i].slice(1);
}
console.log(rez[0].toLocaleLowerCase() + rez.slice(1));