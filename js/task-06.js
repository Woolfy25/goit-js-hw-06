const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const maxLength = parseInt(input.getAttribute("data-length"));

  if (input.value.length === maxLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
