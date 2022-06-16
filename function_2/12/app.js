const arrObj = {
    key: 1,
    key2: 2,
    key3: `as00d`,
    key4: `$`,
    key5: 4,
};
const countKeysWithNumber = (obj) => {
    try {
        let counter = 0;
        for (let key in obj) {
            if (isNaN(obj[key])) counter += 0;
            else ++counter;
        }
        return counter;
    } catch (e) {
        return e;
    }
}

console.log(countKeysWithNumber(arrObj));
