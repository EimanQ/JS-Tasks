const btn = document.querySelector(`.btn`),
    inp1 = document.querySelector(`.inp1`),
    inp2 = document.querySelector(`.inp2`);

btn.addEventListener(`click`, () => {
    const firVal = inp1.value,
        secVal = inp2.value;
    inp1.value = secVal;
    inp2.value = firVal;

})