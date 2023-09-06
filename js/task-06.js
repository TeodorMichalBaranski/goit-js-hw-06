const input = document.querySelector("#validation-input");

input.addEventListener("input", () => {
  const length = input.getAttribute("data-length");
  const text = input.value.length;
  if (text === Number(length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
