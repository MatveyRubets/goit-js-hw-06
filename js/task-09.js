function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
	paragraph: document.querySelector(".color"),
	button: document.querySelector(".change-color"),
	body: document.body,
};

function onClickChangeColor() {
	refs.body.style.backgroundColor = getRandomHexColor();
	refs.paragraph.textContent = getRandomHexColor();
}
refs.button.addEventListener("click", onClickChangeColor);
