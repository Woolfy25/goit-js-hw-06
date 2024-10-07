const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

for (const elements of ingredients) {
  const list = document.createElement("li");
  list.classList.add("item");
  list.innerHTML = elements;
  ingredientsList.append(list);
}
