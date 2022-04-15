const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", onTextInputInput);

function onTextInputInput(event) {
  textOutput.textContent = event.currentTarget.value;
  // textOutput.textContent = textInput.value; //так тоже работает, так хуже?

  if (event.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
  }
}
