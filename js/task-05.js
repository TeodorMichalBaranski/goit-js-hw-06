const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymus";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
//
//---------------------
// const input = document.querySelector("#name-input");
// const span = document.querySelector("#name-output");

// input.addEventListener("input", (el) => {
//   if (el.currentTarget.value === "") {
//     span.textContent = "Anonimowy :D";
//   } else {
//     span.textContent = el.currentTarget.value;
//   }
// });
