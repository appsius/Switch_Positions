// const buttonClickHandler = (event) => {
// 	// event.target.disabled = true;
// 	console.log(event);
// };

// const anotherButtonClickedHandler = () => {
// 	console.log('Button clicked another time...');
// };

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickedHandler;

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
// 	button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach((btn) => {
// 	btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', (event) => {
// 	console.log(event);
// });

const button = document.querySelector('button');
const form = document.querySelector('form');
const div = document.querySelector('div');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(event);
});

div.addEventListener('mouseenter', () => {
	console.log('DIV CLICKED!');
	console.log(event);
});

button.addEventListener('mouseenter', (event) => {
	event.stopPropagation();
	event.stopImmediatePropagation();
	console.log('BUTTON CLICKED!');
	console.log(event);
});
