const anagramWord1 = `Мошкара`,
    anagramWord2 = `Ромашка`;

const checkToAngagrammaWords = (word, word2) => {
    try {
        const wordToCheck = word2.toLowerCase().split(``)
        let counter = 0;
        for (let i = 0; i < word.length; i++) {
            if (word.toLowerCase().includes(wordToCheck[i])) ++counter;
            else throw new Error(`These words are not an anagram`)
        }
        if (counter === word.length) return true;
        throw new Error(`These words are not an anagram`)
    } catch (e) {
        return e;
    }
};
console.log(checkToAngagrammaWords(anagramWord1, anagramWord2));