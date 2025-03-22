
const image = document.querySelector('.slider__image');
const slider = document.querySelector('.slider__input');
let previousValue = Number(slider.value);
slider.addEventListener("input", _.debounce((e) => {
    let computedStyle = image.computedStyleMap();
    let currentWidth = computedStyle.get("width").value;
    let currentHeight = computedStyle.get("height").value;
    if (Number(e.target.value) < previousValue) {
        currentWidth -= 30;
        currentHeight -= 30;
    } else if (Number(e.target.value) > previousValue) {
        currentWidth += 30;
        currentHeight += 30;
    }
    image.style.width = `${currentWidth}px`;
    image.style.height = `${currentHeight}px`;
    previousValue = Number(e.target.value);
    console.log(`Розмір картинки: Width: ${currentWidth}px, Height: ${currentHeight}px`);
}, 300));