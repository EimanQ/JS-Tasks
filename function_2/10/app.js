const dataFilePath = `/home/user/dir/file.txt`;
const checkForSpecSymbol = (path) => {
    const fileCounter = path.split(``).reduce((sum, currValue) => (currValue === `/`) ? sum + 1 : sum + 0, 0)
    if (fileCounter === 0) throw new Error(`Wrong file path`)
    return path.split(``);
}
const findFileExtension = (path) => {
    try {
        const variableToExtension = checkForSpecSymbol(path);
        const returnFile = [];
        for (let i = variableToExtension.length - 1; i < variableToExtension.length; i--) {
            if (variableToExtension[i] === `/`) break;
            returnFile.push(variableToExtension[i]);
        }
        return returnFile.reverse().join(``);
    } catch (e) {
        return e;
    }
}

console.log(findFileExtension(dataFilePath));