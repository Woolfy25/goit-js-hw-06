const form = document.querySelector(".login-form");

function submit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields have to be completed");
  }

  const result = { email: email.value, password: password.value };

  event.currentTarget.reset();

  console.log(result);
}

form.addEventListener("submit", submit);
