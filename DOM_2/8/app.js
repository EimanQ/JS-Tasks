const btn = document.querySelector(`.btn`),
    inp1 = document.querySelector(`.inp1`);

btn.addEventListener(`click`, () => {
    const arrToHTML = [];
    res = document.querySelector(`.para-result`);
    arrToHTML.push(inp1.value);
    if (res.textContent.length > 1) {
        res.textContent += `, ${arrToHTML}`;
    } else res.textContent += `${arrToHTML}`;
    inp1.value = ` `;
})