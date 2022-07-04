const btn = document.querySelector(`.btn`),
    input = document.querySelector(`.number-input`);

btn.addEventListener(`click`, () => {
    alert(input.value)
});