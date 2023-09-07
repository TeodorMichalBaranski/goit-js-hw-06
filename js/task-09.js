function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", (ev) => {
  let bg = getRandomHexColor();
  span.textContent = bg;
  body.style.backgroundColor = bg;
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
// const span = document.querySelector(".color");
// const button = document.querySelector(".change-color");
// const body = document.querySelector("body");

// button.addEventListener("click", () => {
//   const bgC = getRandomHexColor();
//   body.style.backgroundColor = bgC;
//   span.textContent = bgC;
// });
