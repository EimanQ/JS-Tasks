const str = `abcbwwddgdgfeere`;

const doAplhSort = (word) => {
    let newStr = word.split(``)
    return newStr.sort().join(``);
}
console.log(doAplhSort(str));