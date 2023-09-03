const categories = document.querySelectorAll(".item");
// console.log(categories);
console.log(`Number of categories: ${categories.length}`);
for (const el of categories) {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].children.length}`);
}
