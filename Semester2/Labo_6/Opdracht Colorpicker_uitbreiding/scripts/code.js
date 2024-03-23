const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let btnSave = document.getElementById("btnSave");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	// maak het blokje rood
	update();

	btnSave.addEventListener("click", save);

}

const update = () => {
	let colorDemos= document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let valueRed = parseInt(sliders[0].value);
	let valueGreen = parseInt(sliders[1].value);
	let valueBlue = parseInt(sliders[2].value);
	let test = 10;
	let red = document.getElementById("red");
	let green = document.getElementById("green");
	let blue = document.getElementById("blue");

	red.innerText = valueRed;
	green.innerText = valueGreen;
	blue.innerText = valueBlue;


	colorDemos[0].style.backgroundColor = "rgb(" + valueRed + "," + valueGreen + ", " + valueBlue + ")";
}

const save = () =>{
	let sliders = document.getElementsByClassName("slider");
	let saves = document.getElementById("saves");
	let valueRed = parseInt(sliders[0].value);
	let valueGreen = parseInt(sliders[1].value);
	let valueBlue = parseInt(sliders[2].value);

	let div = document.getElementById("saves");
	let savedColor = document.createElement("div");
	savedColor.setAttribute("class", "colorDemo");

	saves.appendChild(savedColor);
	let colorDemos = document.getElementsByClassName("colorDemo");
	savedColor.setAttribute("data-positie", colorDemos.length-1);
	colorDemos[colorDemos.length-1].style.backgroundColor = "rgb(" + valueRed + "," + valueGreen + ", " + valueBlue + ")";

	savedColor.addEventListener("click", setColor.bind(null, "rgb(" + valueRed + "," + valueGreen + ", " + valueBlue + ")"));

	let remove = document.createElement("input");
	remove.setAttribute("type", "button");
	remove.setAttribute("value", "X");
	remove.setAttribute("class", "btnRemove");
	remove.addEventListener("click", removeColor.bind(null, colorDemos.length-1));

	savedColor.appendChild(remove);

}

const setColor = (code) =>{
	let block = document.querySelector(".colorDemo");
	block.style.backgroundColor = code;
}


const removeColor = (positie) =>{
	let saves = document.getElementById("saves");
	let toRemove = saves.childNodes;
	toRemove[positie-1].classList.add("hidden");
}

window.addEventListener("load", setup);