function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function result() {
  backgorund.style.backgroundColor = `${getRandomHexColor()}`;
  text.textContent = getRandomHexColor();
}

const button = document.querySelector(".change-color");
const backgorund = document.querySelector("body");
const text = document.querySelector(".color");

button.addEventListener("click", result);
