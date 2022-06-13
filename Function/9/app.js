const valueA = `Anna`.toLowerCase();
const findPalindrom = (word) => {
    let value = word.split(``);
    if (word == value.reverse().join(``)) return true;
    return false
}
console.log(findPalindrom(valueA));