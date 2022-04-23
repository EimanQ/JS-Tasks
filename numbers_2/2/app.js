const nmbr1 = +prompt();
const nmbr2 = +prompt();

(nmbr1 % nmbr2 === 0) ? alert(`Делится остаток ${nmbr1 % nmbr2}`) : alert(`Делится с остатком ${nmbr1 % nmbr2}`);