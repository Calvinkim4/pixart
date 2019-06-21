let recentColorArr = ['black', 'black', 'black'];
let swatchArray = [];
function recentDivs () {
	for (let i = 0; i < 3; i++) {
		let div = document.createElement('div');
		div.setAttribute('class', 'bigSquare');
		div.addEventListener('click', setRecentValue);
		div.style.backgroundColor = recentColorArr[i];
		swatchArray.push(div);
		document.getElementById('option-menu').appendChild(div);
	}
}

recentDivs();

function changeColor (evt) {
	let red = document.getElementById('red').value;
	let green = document.getElementById('green').value;
	let blue = document.getElementById('blue').value;

	document.querySelector('.brush').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

	event.preventDefault();
	recentColorArr.push(document.querySelector('.brush').style.backgroundColor);
	for (let i = 0; i < swatchArray.length; i++) {
		swatchArray[i].style.backgroundColor = recentColorArr[i];
	}
	if (recentColorArr.length > 3) {
		recentColorArr.splice(0, 1);
	}
}

let recentColor;

function setDivColor (e) {
	recentColor = document.querySelector('.brush').style.backgroundColor;
	e.target.style.backgroundColor = recentColor;
}

// let setColorButton = document.getElementById('set-color');

// setColorButton.addEventListener('click', changeColor);
// setColorButton.addEventListener('mouseenter', changeColor);

let grid = document.getElementById('grid');
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;

let gridRowAmt = gridHeight / 10;
let gridColumnAmt = gridWidth / 10;

let divAmt = gridRowAmt * gridColumnAmt;


const createDivs = () => {
	for (let i = 0; i < divAmt; i++) {
		let flag = 0;
		let div = document.createElement('div');
		div.setAttribute('draggable', false);
		div.setAttribute('class', 'square');
		document.querySelector('body').addEventListener("mousedown", function(e){
		
			document.querySelector('body').onmousemove = function(e) {
				if (e.target.className === 'square') {
					setDivColor(e);
				}
				
			 }
		});
		
		document.querySelector('body').addEventListener("mouseup", function(e){
			document.querySelector('body').onmousemove = null
		});
		grid.appendChild(div);

	}
}

createDivs();

function setRecentValue () {
	document.querySelector('.brush').style.backgroundColor = this.style.backgroundColor;
	changeColor();
}



function updateTextInputRed(val) {
	document.getElementById('red-num').value=val; 
	document.getElementById('red').value=val; 
	changeColor();
}

function updateTextInputGreen(val) {
	document.getElementById('green-num').value=val;
	document.getElementById('green').value=val;
	changeColor();
}

function updateTextInputBlue(val) {
	document.getElementById('blue-num').value=val;
	document.getElementById('blue').value=val;
	changeColor();
}