const inputValue = document.querySelector("[data-length]");

inputValue.addEventListener("blur", onInputClick);

function onInputClick(event) {
  if (Number(inputValue.dataset.length) === event.currentTarget.value.length) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  } else {
    inputValue.classList.remove("valid");
    inputValue.classList.add("invalid");
  }
}
