function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");
changeColorBtn.addEventListener("click", onChangeColorBtnClick);
function onChangeColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}
