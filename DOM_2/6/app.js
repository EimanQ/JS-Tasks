const inp = document.querySelector(`.inp`),
    btn1 = document.querySelector(`.btn`),
    btn2 = document.querySelector(`.btn2`);

btn1.addEventListener(`click`, () => inp.disabled = true);
btn2.addEventListener(`click`, () => inp.disabled = false);