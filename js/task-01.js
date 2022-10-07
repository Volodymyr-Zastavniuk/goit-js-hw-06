const categoriesListRef = document.querySelector("#categories");
const categoryItemsListRef = categoriesListRef.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesListRef.childElementCount}`);

categoryItemsListRef.forEach((item) => {
  console.log(`\nCategory: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelector("ul").childElementCount}`);
});
