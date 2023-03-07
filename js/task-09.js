function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  textSpan: document.querySelector(".color"),
  buttonChange: document.querySelector(".change-color"),
}

function onButtonClick() {
  const colorByRandom = getRandomHexColor();
  document.body.style.background = colorByRandom;
  refs.textSpan.textContent = colorByRandom;
}

refs.buttonChange.addEventListener("click", onButtonClick);
