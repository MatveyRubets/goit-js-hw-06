let counterValue = 0;

const refs = {
	valueRef: document.querySelector("#value"),
	decrementRef: document.querySelector('button[data-action="decrement"]'),
	incrementRef: document.querySelector('button[data-action="increment"]'),
};

function onClickIncrement() {
	counterValue += 1;
	refs.valueRef.textContent = counterValue;
}
function onClickDecrement() {
	counterValue -= 1;
	refs.valueRef.textContent = counterValue;
}

refs.incrementRef.addEventListener("click", onClickIncrement);
refs.decrementRef.addEventListener("click", onClickDecrement);
