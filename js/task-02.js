const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");

const makeElements = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    console.log(liEl);
    liEl.classList.add("item");
    return liEl;
  });
  //
};

ingredientsList.append(...makeElements(ingredients));

// 2------
// const elements = []
// ingredients.forEach((ingredient) => {
// const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   console.log(liEl);
//   liEl.classList.add("item");
//   elements.push(liEl);

// });

// console.log(elements);
// ingredientsList.append(...elements);


// 3----------
// const makeElements = (ingredient) => {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   console.log(liEl);
//   liEl.classList.add("item");
//   return liEl;
// };

// ingredientsList.append(...makeElements(ingredients));


