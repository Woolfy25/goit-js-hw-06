const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
let size;

input.addEventListener("input", (event) => {
  size = event.currentTarget.value;
  text.style.fontSize = `${size}px`;
});
