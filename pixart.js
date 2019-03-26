function changeColor (evt) {
	document.querySelector('.brush').style.backgroundColor = document.getElementById('color-field').value;

	event.preventDefault();
}

function setDivColor () {
	this.style.backgroundColor = document.getElementById('color-field').value;
}

let setColorButton = document.getElementById('set-color');

setColorButton.addEventListener('click', changeColor);
setColorButton.addEventListener('mouseenter', changeColor);

const createDivs = () => {
	for (let i = 0; i < 20; i++) {
		let div = document.createElement('div');
		div.setAttribute('class', 'square');
		div.addEventListener('click', setDivColor);
		document.querySelector('body').appendChild(div);

	}
}

createDivs();