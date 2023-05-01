const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const arrList = [];

ingredients.forEach((item) => {
  const listItems = document.createElement("li");

  listItems.textContent = item;
  listItems.classList.add("item");
  arrList.push(listItems);
});

ingredientsList.append(...arrList);
console.log(ingredientsList);
