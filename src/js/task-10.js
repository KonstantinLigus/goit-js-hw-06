function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
createBtn.addEventListener("click", onCreateBtnClick);

function onCreateBtnClick() {}
