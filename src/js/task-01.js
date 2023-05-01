// const categories = document.querySelector("#categories");
// // console.log(categories);
// const categoryQuantity = categories.querySelectorAll(".item");
// console.log("Number of categories:", categoryQuantity.length);

// categories.querySelectorAll(".item").forEach((el) => {
//   const title = el.querySelector("h2");
//   console.log("Category:", title.textContent);
//   const listElements = el.querySelectorAll("li");
//   console.log("Elements:", listElements.length);
// });

const categories = document.querySelector("#categories");
// console.log(categories);
const categoryQuantity = categories.children;
console.log("Number of categories:", categoryQuantity.length);

[...categoryQuantity].forEach((el) => {
  const title = el.firstElementChild;
  console.log("Category:", title.textContent);
  const listElements = el.lastElementChild.children;
  console.log("Elements:", listElements.length);
});
