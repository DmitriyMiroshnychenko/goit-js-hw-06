const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientsListItemRef = document.createElement("li");
  ingredientsListItemRef.className = "item";
  ingredientsListItemRef.textContent = ingredient;

  return ingredientsListItemRef;
});

ingredientsListRef.append(...ingredientsList);
