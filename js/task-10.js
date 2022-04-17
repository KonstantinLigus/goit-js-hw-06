function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputNumber = document.querySelector("input");
const boxes = document.querySelector("div#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", destroyBoxes);

function onCreateBtnClick() {
  createBoxes(Number(inputNumber.value));
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

// ---------
// Variant 1
function createBoxes(amount) {
  let divArr = "";

  for (let i = 0; i < amount; i += 1) {
    divArr += `<div style='width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}'></div>`;
  }

  boxes.insertAdjacentHTML("beforeend", divArr);
}

// Variant 2
// function createBoxes(amount) {
//   let divArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     let div = document.createElement("div");
//     div.style.width = `${30 + i * 10}px`;
//     div.style.height = `${30 + i * 10}px`;
//     div.style.backgroundColor = getRandomHexColor();
//     divArr.push(div);
//   }
//   boxes.append(...divArr);
// }
// -----------
