const btn = document.querySelector(`.btn`),
    res = document.querySelector(`.para-result`),
    err = document.querySelector(`.paragrah-error`);


btn.addEventListener(`click`, () => {
    try {
        const inp1 = document.querySelector(`.inp1`);
        const arrToHTML = [];
        if (inp1.value.length < 1) throw new Error(`Your input is empty`);
        else {
            if (isNaN(inp1.value)) {
                err.textContent = ` `;
                arrToHTML.push(inp1.value);
                if (res.textContent.length > 1) {
                    res.textContent += `, ${arrToHTML}`;
                } else res.textContent += `${arrToHTML}`;
                inp1.value = ` `;
            } else throw new Error(`It's a number`)
        }
    } catch (e) {
        res.textContent = ` `;
        err.innerHTML = e.message;
        err.style = `color: red`;
    }
})