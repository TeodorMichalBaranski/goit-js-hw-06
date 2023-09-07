function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxChildren = boxes.children;
  let size =
    boxChildren.length === 0 ? 30 : parseInt(boxes.lastChild.style.width);

  for (let i = 0; i < amount; i++) {
    size += i * 10;
    let box = document.createElement("div");
    boxes.append(box);
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10 px";
  }
}
btnCreate.addEventListener("click", () => {
  let amount = input.value;
  createBoxes(amount);
});
btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
