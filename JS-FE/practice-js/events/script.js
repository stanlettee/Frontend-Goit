const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", () => {
  const page = document.querySelector("body");

  const green = Math.round(Math.random() * (255 - 0) + 0);
  const yellow = Math.round(Math.random() * (255 - 0) + 0);
  const red = Math.round(Math.random() * (255 - 0) + 0);
  const randomColor = `rgb(${green}, ${yellow}, ${red})`;
  page.style.backgroundColor = randomColor;
});
