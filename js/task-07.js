const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
const defaultSize = input.value;

span.style.fontSize = defaultSize + "px";

input.addEventListener("input", (ev) => {
  const size = ev.currentTarget.value;
  span.style.fontSize = size + "px";
});

//-----------
// const input = document.querySelector("#font-size-control");
// const span = document.querySelector("#text");

// const defaultSize = input.value;
// span.style.fontSize = defaultSize + "px";

// input.addEventListener("input", (el) => {
//   let size = el.currentTarget.value;
//   span.style.fontSize = size + "px";
// });
