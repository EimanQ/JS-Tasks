
const palindromWord = `Anna`;

const checkToPalindromWord = (word) => {
    const variableToCheck = word.toLowerCase().split(``).reverse()
    if (word.toLowerCase() === variableToCheck.join(``)) return true;
    return false; 
}

console.log(checkToPalindromWord(palindromWord));