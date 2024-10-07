const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  //   const form = event.target;
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const result = { email: email, password: password };
  event.currentTarget.reset();
  console.log(result);
}
