function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    divBoxesEl.append(div);
    div.style.backgroundColor = getRandomHexColor();
  }
}

buttonCreateEl.addEventListener("click", createBoxes);

function destroyBoxes() {
  inputEl.value = "";
  divBoxesEl.textContent = "";
}

buttonDestroyEl.addEventListener("click", destroyBoxes);

