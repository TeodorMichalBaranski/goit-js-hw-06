const btnDown = document.querySelector("button[data-action='decrement']");
const btnUp = document.querySelector("button[data-action='increment']");
console.log(btnDown, btnUp);
const value = document.querySelector("#value");
let counterValue = 0;

btnDown.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
btnUp.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
