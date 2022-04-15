const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormChange);
function onFormChange(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be fill");
  }
  console.log({
    value: email.value,
    password: password.value,
  });
}
