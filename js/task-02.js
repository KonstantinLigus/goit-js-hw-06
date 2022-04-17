const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const itemsOfListEl = ingredients.map((elem) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = elem;
  itemEl.classList.add("item");
  return itemEl;
});

listEl.append(...itemsOfListEl);
