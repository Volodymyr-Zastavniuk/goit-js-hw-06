const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  const inputClass = event.target.classList;

  if (Number(event.target.dataset.length) !== event.target.value.length) {
    inputClass.add("invalid");
    inputClass.remove("valid");
    return;
  }

  inputClass.add("valid");
  inputClass.remove("invalid");
});
