const input = document.querySelector("#validation-input");
const length = input.getAttribute("data-length");
console.log(length);
console.log(typeof length);
input.addEventListener("blur", () => {
  let text = input.value.length;
  console.log(`Length of text in input is ${text}`);
  if (text === Number(length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
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
//
//
//
//
//
//
//
// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", () => {
//   const length = input.getAttribute("data-length");
//   const text = input.value.length;
//   if (text === Number(length)) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// });
