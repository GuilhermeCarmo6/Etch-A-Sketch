const container = document.querySelector('.container');
const button = document.querySelector('button');

function createGrid(sideLength, gridContainer) {
  // Clear existing grid
  gridContainer.innerHTML = '';

  // Create squares
  for (let i = 0; i < sideLength ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
  }

  // Set dynamic width
  gridContainer.style.width = `calc(25px * ${sideLength} + 4px)`;
}

function initializeGrid(initialSize = 16) {
  createGrid(initialSize, container);
}

// Event listener for hovering (using event delegation)
container.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('square')) {
    event.target.classList.add('hovered');
  }
});

// Button click handler
button.addEventListener('click', () => {
  const input = prompt("What's the new side length of the grid?");
  const sideLength = parseInt(input, 10);

  if (isNaN(sideLength) || sideLength <= 0 || sideLength > 100) {
    alert('Please enter a valid positive number between 1 and 100.');
    return;
  }

  createGrid(sideLength, container);
});

// Initialize with default grid
initializeGrid();
