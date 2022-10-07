// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counterLabel: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
refs.incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  refs.counterLabel.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  refs.counterLabel.textContent = counterValue;
}
