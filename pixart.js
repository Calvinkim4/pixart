function changeColor (evt) {
	document.querySelector('.brush').style.backgroundColor = document.getElementById('color-field').value;

	event.preventDefault();
}

let setColorButton = document.getElementById('set-color');

setColorButton.addEventListener('click', changeColor);
setColorButton.addEventListener('mouseenter', changeColor);