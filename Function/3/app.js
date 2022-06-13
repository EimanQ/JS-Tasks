const value = `Anna`;

const findPolindrom = (word) => {
    let wordReverse = word.split(``).reverse()
    for (let i = 0; i < word.length; i++) {
        if (word.toLowerCase() == wordReverse.join(``).toLowerCase()) return true;
        return false;
    }
}

console.log(findPolindrom(value));