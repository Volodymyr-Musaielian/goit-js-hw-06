const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const listItems = document.createElement("li");

  listItems.textContent = [item];
  listItems.classList.add("item");
  ingredientsList.append(listItems);
});

console.log(ingredientsList);
