const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const max = parseInt(input.getAttribute("data-length"));

  if (input.value.length >= max) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
