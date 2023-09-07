const categories = document.querySelectorAll(".item");
console.log(categories);
console.log(typeof categories);
console.log(`Number of categories: ${categories.length}`);
[...categories].map((el) => {
  console.log(`Category:`, el.children[0].textContent);
  console.log(`Elements:`, el.children[1].children.length);
});
//--------------------------
//const li = document.querySelectorAll(".item");

// console.log(`Number of elements is ${li.length}`);
// for (const el of li) {
//   let h2 = el.children[0].textContent;
//   console.log(`Category: ${h2}`);
//   let liEl = el.children[1].children.length;
//   console.log(`Number is : ${liEl}`);
// }
