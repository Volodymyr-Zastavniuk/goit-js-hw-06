const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;

  if (!(email.value && password.value)) {
    alert("Все поля должны быть заполнены!");
    return;
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  event.target.reset();
});
