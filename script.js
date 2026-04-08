const container = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	container.appendChild(square);
}

container.addEventListener('mouseover', (event) => {
	let target = event.target;

	if (target.classList.contains('square')) target.classList.add('hovered');
});
