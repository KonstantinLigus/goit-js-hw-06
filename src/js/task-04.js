let counterValue = 0;

const count = document.querySelector("#value");
count = count.textContent = counterValue; 
const decrementBtn = document.querySelector("[data-action="decrement"]");
const incrementBtn = document.querySelector("[data-action="increment"]");

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
   
}

function onIncrementBtnClick() {
  counterValue += 1;
   
}


