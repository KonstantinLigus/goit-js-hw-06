let counterValue = 0;
const count = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  count.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  count.textContent = counterValue;
}
