const nameInput = document.querySelector(`#name-input`);
const name = document.getElementById(`name-output`);

nameInput.addEventListener("input", (event) => {
  name.textContent = event.currentTarget.value;
});
