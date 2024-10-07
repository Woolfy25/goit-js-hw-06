const categ = document.querySelector("#categories");
const items = document.querySelector(".item");

console.log("Number of categories:", categ.children.length);

console.log("Category:", items.firstElementChild.innerHTML);
console.log("Elements:", items.lastElementChild.children.length);

console.log("Category:", items.nextElementSibling.firstElementChild.innerHTML);
console.log(
  "Elements:",
  items.nextElementSibling.lastElementChild.children.length
);

console.log("Category:", categ.lastElementChild.firstElementChild.innerHTML);
console.log(
  "Elements:",
  categ.lastElementChild.lastElementChild.children.length
);
