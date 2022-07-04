const btn = document.querySelector(`.btn`);

const getRandomColor = () => {
    let color = `#`;
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 8);
        color += random;
    }
    return color
}

btn.addEventListener(`click`, () => btn.style = `background-color: ${getRandomColor()}`);