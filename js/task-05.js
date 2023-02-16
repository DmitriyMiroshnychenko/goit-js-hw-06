const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", function () {
  output.textContent = input.value || "Anonymous";
});
