const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const value = document.querySelector("#value");

let counterDisplay = 0;

incrementBtn.addEventListener("click", function () {
  counterDisplay += 1;
  value.innerHTML = counterDisplay;
});

decrementBtn.addEventListener("click", function () {
  counterDisplay -= 1;
  value.innerHTML = counterDisplay;
});
