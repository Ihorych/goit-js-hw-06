const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItem = document.querySelector(`#ingredients`);

const ingredientItem = items => {
  return items.map((item) =>{
    const ingredientItem = document.createElement(`li`);
    ingredientItem.textContent = item;
    ingredientItem.classList.add(`item`);
    return ingredientItem
  })
}
const elem = ingredientItem(ingredients);
listItem.append(...elem)


