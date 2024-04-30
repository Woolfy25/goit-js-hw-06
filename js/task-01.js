function NumberOfCategories() {
  return document.querySelector("#categories").children.length;
}

function firstCategory() {
  const firstName =
    document.querySelector("#categories").firstElementChild.firstElementChild
      .innerHTML;
  const firstCat =
    document.querySelector("#categories").firstElementChild.lastElementChild
      .children.length;

  const result = `Category: ${firstName}, Elements:  ${firstCat}`;

  return result;
}

function secondCategory() {
  const firstName =
    document.querySelector("#categories").firstElementChild.nextElementSibling
      .firstElementChild.innerHTML;
  const firstCat =
    document.querySelector("#categories").firstElementChild.nextElementSibling
      .lastElementChild.children.length;

  const result = `Category: ${firstName}, Elements:  ${firstCat}`;

  return result;
}

function thirdCategory() {
  const firstName =
    document.querySelector("#categories").lastElementChild.firstElementChild
      .innerHTML;
  const firstCat =
    document.querySelector("#categories").lastElementChild.lastElementChild
      .children.length;

  const result = `Category: ${firstName}, Elements:  ${firstCat}`;

  return result;
}

console.log("Number of categories: ", NumberOfCategories());
console.log(firstCategory());
console.log(secondCategory());
console.log(thirdCategory());
