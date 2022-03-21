const refs = {
	inputRefs: document.querySelector("#name-input"),
	outputRefs: document.querySelector("#name-output"),
};

function handleChangeValue(event) {
	refs.outputRefs.textContent = event.currentTarget.value;
	if (!refs.outputRefs.textContent) {
		refs.outputRefs.textContent = "Anonymous";
	}
}

refs.inputRefs.addEventListener("input", handleChangeValue);
