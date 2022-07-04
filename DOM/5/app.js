const btn = document.querySelector(`.btn`),
    result = document.querySelector(`.result`);

const checkInp = (inputEl) => {
    if (inputEl.length === 0) throw new Error(`Empty input`);
    else {
        if (isNaN(inputEl)) throw new Error(`Your value isn't a number`);
        return inputEl;
    }
}


btn.addEventListener(`click`, () => {
    try {
        const input = document.querySelector(`input`).value;
        const callCheckInp = checkInp(input);
        const arrayToHTML = [];
        for (let i = 0; i < callCheckInp; i++) {
            if (i === 0 || i === 1) arrayToHTML.push(i);
            else arrayToHTML.push(arrayToHTML[i - 1] + arrayToHTML[i - 2])
        }
        const newP = document.createElement(`p`);
        newP.className = `paragraph-result`;
        result.appendChild(newP);
        document.querySelector(`.paragraph-result`).innerHTML = `[${arrayToHTML}]`;
    } catch (e) {
        return alert(e.message)
    }
});