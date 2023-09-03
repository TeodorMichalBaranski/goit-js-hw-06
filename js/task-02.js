const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  let li = document.createElement("li");
  li.textContent = el;
  ul.append(li);
  li.classList.add("item");
});
console.log(ul.innerHTML);
