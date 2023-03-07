const textInput = document.querySelector("#validation-input");
console.log(textInput)
const inputLength = Number(textInput.getAttribute("data-length"));
console.log(inputLength)


textInput.addEventListener("blur", () => {
  if (textInput.value.length <= inputLength) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
  
});
