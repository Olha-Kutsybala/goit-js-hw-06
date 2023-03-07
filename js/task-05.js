const refs = {
  input: document.querySelector("#name-input"),
  title: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.title.textContent = event.currentTarget.value;
}
