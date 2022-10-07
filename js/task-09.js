const refs = {
  body: document.querySelector("body"),
  textField: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.textField.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
