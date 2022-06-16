const newStr = `asd`;

const completeCheckingOfStr = (str) => {
    try {
        if (isNaN(str)) {
            const strForCheck = str.trim().toLowerCase()
            if (strForCheck === `hschool`) return true
            throw new Error(`Incorrect string`)
        } else {
            if (str % 2 === 0) return `Even number`
            return `Odd number`;
        }
    } catch (e) {
        return e;
    }
}

console.log(completeCheckingOfStr(newStr));