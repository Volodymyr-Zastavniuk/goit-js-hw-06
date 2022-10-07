const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => {
  const amount = refs.input.value;
  if (!(amount >= 1 && amount <= 100)) {
    alert("Введите число от 1 до 100");
    return;
  }
  createBoxes(amount);
});

refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxesMarkup = "";
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10 + refs.boxes.childElementCount * 10;
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
  }
  refs.boxes.insertAdjacentHTML("beforeend", boxesMarkup);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
