let counterValue = 0;
const value = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", onBtnDecrement);

function onBtnDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

incrementBtn.addEventListener("click", onBtnincrement);

function onBtnincrement() {
  counterValue += 1;
  value.textContent = counterValue;
}
