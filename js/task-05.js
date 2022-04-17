const textInput = document.querySelector("input#name-input");
const textOutput = document.querySelector("span#name-output");

textInput.addEventListener("input", onTextInputChange);

function onTextInputChange(event) {
  textOutput.textContent = event.currentTarget.value;
  // textOutput.textContent = textInput.value; //так тоже работает, так хуже?

  if (event.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
  }
}
