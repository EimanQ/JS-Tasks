const urlStr = `https://www.youtube.com/watch?v=5qap5aO4i9A`;

const checkForUrl = (str) => {
    try {
        const valueForCheck = /https:\/\/www.\w+.\w+/.test(str)
        if (valueForCheck === true) return true
        throw new Error(`Its not a url`);
    } catch (e) {
        return e;
    }
}