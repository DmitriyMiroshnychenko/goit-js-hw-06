const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];
    if (input.name) {
      formData[input.name] = input.value;
    }
  }
  if (!formData["email"] || !formData["password"]) {
    alert("Please fill in all fields!");
    return;
  }
  console.log(formData);
  form.reset();
});
