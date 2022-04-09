const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const listEl = ingredients.map((elem) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = elem;
  itemEl.classList.add("item");
  return itemEl;
});

list.append(...listEl);
