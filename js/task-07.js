const text = document.getElementById("text");
const inputValue = document.getElementById("font-size-control");

text.style.fontSize = inputValue.value + "px";
inputValue.addEventListener("input", fontSizeControler);

function fontSizeControler(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}

console.log(text);
