const buttons = document.querySelectorAll('button');

const buttonClickHandler = (event) => {
	event.target.disabled = true;
	console.log(event);
};

const anotherButtonClickedHandler = () => {
	console.log('Button clicked another time...');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickedHandler;

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
// 	button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach((btn) => {
	btn.addEventListener('click', buttonClickHandler);
});
