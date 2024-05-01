let counterValue = 0;

const display = document.querySelector(`#value`);
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", function () {
  counterValue--;
  display.textContent = counterValue;
});
increment.addEventListener("click", function () {
  counterValue++;
  display.textContent = counterValue;
});
