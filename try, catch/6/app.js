const stafferInfo = `Хенилане Янис@ Иварсович`;

const checkLenghtOfStafferInfo = (str) => {
    const arrInfo = str.split(` `);
    if (arrInfo.length === 3) return arrInfo;
    throw new Error(`Incorrect staffer info`);
}

const checkForSpecSymbols = (str) => {
    try {
        const arrForCheck = checkLenghtOfStafferInfo(str);
        for (let i = 0; i < arrForCheck.length; i++) {
            const checkForNumb = /[0-9|@|#|!|$|%|^|&]/.test(arrForCheck[i])
            if (checkForNumb === true) throw new Error(`Your staffer info uncludes symbols or numbers`);
            continue
        }
        return arrForCheck.join(` `);
    } catch (e) {
        return e;
    }
}
console.log(checkForSpecSymbols(stafferInfo));