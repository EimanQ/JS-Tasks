const btn = document.querySelector(`.btn`),
    result = document.querySelector(`.result`);

const checkInpVal = (inpVal) => {
    if (inpVal.length === 0) throw new Error(`Input is empty`)
    else {
        if (isNaN(inpVal)) throw new Error(`Your value is not a number`);
        else {
            if (inpVal % 2 !== 0) throw new Error(`It's an odd number`)
            else return inpVal;
        }

    }
}

btn.addEventListener(`click`, () => {
    try {
        const input = document.querySelector(`.inp`).value;
        const callCheckInpVal = checkInpVal(input);
        result.textContent = `result: ${callCheckInpVal*2}`;
    } catch (e) {
        return result.innerHTML = e.message
    }
})