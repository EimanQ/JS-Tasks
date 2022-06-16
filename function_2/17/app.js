const lengthOfFib = 10;

const doFib = (length) => {
    const arrForFib = [];
    for (let i = 0; i < 10; i++) {
        if (i === 0) arrForFib.push(i);
        else if (arrForFib.length === 1) arrForFib.push(i);
        else arrForFib.push(arrForFib[i - 1] + arrForFib[i - 2]);
    }
    return arrForFib;
}

console.log(doFib(lengthOfFib));