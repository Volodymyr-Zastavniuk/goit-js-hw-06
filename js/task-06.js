// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  Number(event.target.dataset.length) === event.target.value.length
    ? (event.target.classList.add("valid"),
      event.target.classList.remove("invalid"))
    : (event.target.classList.add("invalid"),
      event.target.classList.remove("valid"));
});
