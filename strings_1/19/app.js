const valueX = prompt().toLowerCase();
let adenin = ``;
let guanin = ``;
let citosin = ``;
let timin = ``;

for (let i = 0; i < valueX.length; i++) {
    if (valueX[i] === `а`) {
        adenin += valueX[i];
    } else if (valueX[i] === `г`) {
        guanin += valueX[i];
    }
    else if (valueX[i] === `ц`) {
        citosin += valueX[i];
    }
    else if (valueX[i] === `т`) {
        timin += valueX[i];
    } else { }
}

console.log(`Аденина: ${adenin.length}\nГуанина: ${guanin.length}\nЦитозина: ${citosin.length}\nТимина: ${timin.length}`);
