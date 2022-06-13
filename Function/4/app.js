const value = `Ямка`,
    value2 = `Маяк`;
const findAnagramma = (word1, word2) => {
    let rez = 0;
    for (let i = 0; i < word1.length; i++) {
        word1.toLowerCase().split(``).includes(word2.toLowerCase()[i]) ? rez += 1 : null;
    }
    if (rez === word1.length) return true;
    return false
}
console.log(findAnagramma(value, value2))
