const categoriesEl = document.querySelector("#categories");
const listOfCategories = categoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach((category) => {
  const categoryTitle = category.firstElementChild.textContent;

  console.log(`Category: ${categoryTitle}`);

  const categoryElements = category.lastElementChild;

  console.log(`Elements: ${categoryElements.childElementCount}`);
});
