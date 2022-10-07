const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerRef = document.querySelector("#ingredients");

const createIngredientsRef = (ingredients) => {
  return ingredients.map((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");

    return item;
  });
};

ingredientsContainerRef.append(...createIngredientsRef(ingredients));
