const urlStr = `https://www.youtube.com/watch?v=5qap5aO4i9A`;

const checkStrForAt = (str) => {
    try {
        const checkForAt = /https:\/\/www.\w+.com/.test(str);
        if (checkForAt === true) return checkForAt;
        throw new Error(`That's not an url addres`)
    } catch (e) {
        return e;
    }
}

console.log(checkStrForAt(urlStr));