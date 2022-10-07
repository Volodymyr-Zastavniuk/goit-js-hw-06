function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => {
  const amount = refs.input.value;
  amount >= 1 && amount <= 100
    ? createBoxes(amount)
    : alert("Введите число от 1 до 100");
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
