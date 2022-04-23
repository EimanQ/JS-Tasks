const valueX = prompt().split(` `);

const first = valueX[0];
const second = valueX[1];

const cut1 = first.slice(1);
const firstName = first[0].toUpperCase().concat(cut1);

const cut2 = second.slice(1);
const secondName = second[0].toUpperCase().concat(cut2);

(first === firstName && second === secondName) ? alert(`Yes`) : alert(`No`);
