const form = document.querySelector(".login-form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const { email, password } = ev.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Please fill all fields");
  } else {
    const object = {
      email: email.value,
      password: password.value,
    };
    console.log(object);
    form.reset();
  }
});
