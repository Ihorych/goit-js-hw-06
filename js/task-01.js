//  const categories = document.querySelectorAll(`li.item`)
//  console.log(`Number of categories: ${categories.length}`)

//  Array.prototype.forEach.call(categories, (element) => {
//     const listTitle = element.querySelector(`h2`).innerHTML;
//     const listItem = element.querySelectorAll(`li`).length;

//     console.log(`Category: ${listTitle}`)
//     console.log(`Category: ${listItem}`)
//  })

const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li');

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
});