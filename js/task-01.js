const categoriesListRef = document.querySelector("#categories");
const categoryItemsListRef = categoriesListRef.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesListRef.childElementCount}`);

categoryItemsListRef.forEach((item) => {
  console.log(`\nCategory: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
