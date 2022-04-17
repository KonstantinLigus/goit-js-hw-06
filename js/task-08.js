const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormChange);

function onFormChange(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    event.currentTarget.reset();
    return alert("All fields must be fill");
  }
  setAutorization(email.value, password.value);
  event.currentTarget.reset();
}

function setAutorization(email, password) {
  const autorizationInfo = {
    email,
    password,
  };
  console.log(autorizationInfo);
}
