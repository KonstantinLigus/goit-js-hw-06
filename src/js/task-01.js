// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

const listItems = document.querySelectorAll(".item");
console.log("Number of categories:", listItems.length);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега < h2 >) и количество элементов в
// категории (всех вложенных в него < li >).

console.log("Category:", listItems[0].firstElementChild.textContent);
console.log("Elements:", listItems[0].lastElementChild.children.length);

console.log("Category:", listItems[1].firstElementChild.textContent);
console.log("Elements:", listItems[1].lastElementChild.children.length);

console.log("Category:", listItems[2].firstElementChild.textContent);
console.log("Elements:", listItems[2].lastElementChild.children.length);
