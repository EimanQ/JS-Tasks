const btn = document.querySelector(`.btn`),
    input = document.querySelector(`.number-input`);

btn.addEventListener(`click`, () => {
    input.placeholder = `«+375 29 155 91 55»`;
});