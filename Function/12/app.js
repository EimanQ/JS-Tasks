const str = `Hello Hanna`.toLowerCase().split(``);

const countVowelStr = (word) => {
    let rez = word.reduce((sum, current, index, array) => (array[index] === `a` || array[index] === `e` || array[index] === `o` || array[index] === `i` || array[index] === `u`) ? sum + 1 : sum + 0, 0);
    return rez;
}

console.log(countVowelStr(str));