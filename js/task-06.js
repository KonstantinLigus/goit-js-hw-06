const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onTextInputChange);

function onTextInputChange(event) {
  console.log(event.currentTarget.value.length);
  console.log(Number(event.currentTarget.dataset.length));
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
