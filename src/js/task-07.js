const inputRange = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");
inputRange.addEventListener("input", onInputRangeChange);

function onInputRangeChange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
