const button = document.querySelector('button');

const buttonClickHandler = () => {
	alert('Button Clicked!');
};

const anotherButtonClickedHandler = () => {
	console.log('Button clicked another time...');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickedHandler;

const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);

setTimeout(() => {
	button.removeEventListener('click', boundFn);
}, 2000);
