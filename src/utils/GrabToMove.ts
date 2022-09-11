let container;
let pos = { top: 0, left: 0, x: 0, y: 0 };

export const mouseDownHandler = function (e) {
	container = e.target;

	e.target.style.cursor = 'grabbing';
	e.target.style.userSelect = 'none';

	pos = {
		// The current scroll
		left: e.target.scrollLeft,
		top: e.target.scrollTop,
		// Get the current mouse position
		x: e.clientX,
		y: e.clientY
	};

	document.addEventListener('mousemove', mouseMoveHandler);
	document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
	// How far the mouse has been moved
	const dx = e.clientX - pos.x;
	const dy = e.clientY - pos.y;

	// Scroll the element
	container.scrollTop = pos.top - dy;
	container.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
	document.removeEventListener('mousemove', mouseMoveHandler);
	document.removeEventListener('mouseup', mouseUpHandler);

	container.style.cursor = 'grab';
	container.style.removeProperty('user-select');
};
