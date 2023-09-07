const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
console.log(ul);
const arrIngredients = ingredients.map((el) => {
  let li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");
  return li;
});
ul.append(...arrIngredients);
// console.log(ul.innerHTML);

//----------------------
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const ul = document.querySelector("#ingredients");

// ingredients.forEach((el) => {
//   let li = document.createElement("li");
//   li.textContent = el;
//   ul.append(li);
//   li.classList.add("item");
//   console.log(li);
// });
