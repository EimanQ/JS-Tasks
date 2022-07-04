const btn = document.querySelector(`.btn`),
    input = document.querySelector(`.number-input`);

const checkInp = (inputEl) => {
    if (inputEl.value.length === 0) throw new Error(`Empty inpu t`);
    return inputEl;
}
btn.addEventListener(`click`, () => {
    try {
        const callCheckInp = checkInp(input);
        if (callCheckInp) alert(callCheckInp.value)
    } catch (e) {
        return alert(e.message)
    }

});