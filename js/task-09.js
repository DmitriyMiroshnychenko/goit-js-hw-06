const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", () => {
  let randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  colorSpan.textContent = randomHexColor;
});
