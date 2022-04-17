// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

const listEl = document.querySelectorAll(".item");
console.log("Number of categories:", listEl.length);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега < h2 >) и количество элементов в
// категории (всех вложенных в него < li >).

console.log("Category:", listEl[0].firstElementChild.textContent);
console.log("Elements:", listEl[0].lastElementChild.children.length);

console.log("Category:", listEl[1].firstElementChild.textContent);
console.log("Elements:", listEl[1].lastElementChild.children.length);

console.log("Category:", listEl[2].firstElementChild.textContent);
console.log("Elements:", listEl[2].lastElementChild.children.length);
