function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.querySelector("body");

function changeColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = getRandomHexColor();
}

button.addEventListener("click", changeColor);
