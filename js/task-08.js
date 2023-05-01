const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Не всі поля заповнені!");
  }

  const formData = new FormData(event.currentTarget);
  const objRes = {};

  formData.forEach((value, key) => {
    objRes[key] = value;
  });

  console.log(objRes);

  event.currentTarget.reset();
}
