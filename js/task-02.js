const ingredientsName = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients")
const elements = []
ingredientsName.forEach((ingredient) => {
const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  console.log(liEl);
  liEl.classList.add(".item");
  elements.push(liEl);

});

console.log(elements);
ingredientsList.append(...elements);