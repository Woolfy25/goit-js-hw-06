const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listPrime = ingredients.map((element) => {
  const list = document.createElement("li");
  list.textContent = element;
  list.classList.add("item");

  return list;
});

ingredientsList.append(...listPrime);
