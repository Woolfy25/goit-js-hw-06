const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
let listElements;

for (let i = 0; i > ingredients.length; i++) {
  listElements = document.createElement("li");
  list.textContent = ingredients[i];
  list.append(listElements);
}
