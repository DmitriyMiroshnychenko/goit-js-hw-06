function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBoxesBtn = document.querySelector('button[data-create]');
const destroyBoxesBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

function createBoxes() {
  const boxes = [];
  let initialSize = 30;

  for (let i = 1; i<= input.value; i += 1) {
    initialSize = i > 1 ? initialSize + 10 : initialSize;
    const color = getRandomHexColor();
    boxes.push(`<div style="width: ${initialSize}px; height: ${initialSize}px; background-color: ${color}"></div>`);
  }

  const joinedBoxes = boxes.join('');
  input.value = '';
  return boxesRef.insertAdjacentHTML('beforeend', joinedBoxes);
}

function destroyBoxes() {
  return boxesRef.innerHTML = '';

}

createBoxesBtn.addEventListener('click', createBoxes);

destroyBoxesBtn.addEventListener('click', destroyBoxes);