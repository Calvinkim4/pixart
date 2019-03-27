let recentColorArr = ['black', 'black', 'black'];
let swatchArray = [];
function recentDivs () {
	for (let i = 0; i < 3; i++) {
		let div = document.createElement('div');
		div.setAttribute('class', 'bigSquare');
		div.addEventListener('mouseenter', setRecentValue);
		div.addEventListener('click', setRecentValue);
		div.style.backgroundColor = recentColorArr[i];
		swatchArray.push(div);
		document.querySelector('body').appendChild(div);
	}
}

recentDivs();

function changeColor (evt) {
	document.querySelector('.brush').style.backgroundColor = document.getElementById('color-field').value;
	event.preventDefault();
	recentColorArr.push(document.getElementById('color-field').value);
	if (recentColorArr.length > 3) {
		recentColorArr.splice(0, 1);
	}
	for (let i = 0; i < swatchArray.length; i++) {
		swatchArray[i].style.backgroundColor = recentColorArr[i];
	}
}

let recentColor;

function setDivColor () {
	recentColor = document.getElementById('color-field').value;
	this.style.backgroundColor = recentColor;
}

let setColorButton = document.getElementById('set-color');

setColorButton.addEventListener('click', changeColor);
setColorButton.addEventListener('mouseenter', changeColor);

const createDivs = () => {
	for (let i = 0; i < 500; i++) {
		let div = document.createElement('div');
		div.setAttribute('class', 'square');
		div.addEventListener('mouseover', setDivColor);
		document.querySelector('body').appendChild(div);

	}
}

createDivs();

function setRecentValue () {
	document.getElementById('color-field').value = this.style.backgroundColor;
}

