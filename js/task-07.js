const text = document.getElementById("text");
const inputValue = document.getElementById("font-size-control");

inputValue.addEventListener("input", fontSizeControler);

function fontSizeControler(event) {
  text.style.fontSize = String(event.currentTarget.value + "px");
}

console.log(text);
