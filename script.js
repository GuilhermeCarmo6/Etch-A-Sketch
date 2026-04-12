const container = document.querySelector('.container');
const button = document.querySelector('button');

function createGrid(sideLength, gridContainer) {
  gridContainer.innerHTML = '';

  for (let i = 0; i < sideLength ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
  }

  gridContainer.style.width = `calc(25px * ${sideLength} + 4px)`;
}

function initializeGrid(initialSize = 16) {
  createGrid(initialSize, container);
}

container.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('square')) {
    event.target.style.backgroundColor = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' +  1 + ')';

    let currentBrightness = event.target.dataset.brightness || 100;
    currentBrightness = Math.max(0, currentBrightness - 10);
    event.target.dataset.brightness = currentBrightness;
    event.target.style.filter = `brightness(${currentBrightness}%)`;
  }
});

button.addEventListener('click', () => {
  const input = prompt("What's the new side length of the grid?");
  const sideLength = parseInt(input, 10);

  if (isNaN(sideLength) || sideLength <= 0 || sideLength > 100) {
    alert('Please enter a valid positive number between 1 and 100.');
    return;
  }

  createGrid(sideLength, container);
});

initializeGrid();
