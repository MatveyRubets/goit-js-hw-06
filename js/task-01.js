const categories = document.querySelector("#categories");
const categoriesItems = [...categories.children];
console.log("Number of categories: ", categoriesItems.length);

categoriesItems.forEach(categorie => {
	console.log("Category: ", categorie.firstElementChild.textContent);
	console.log("Elements: ", categorie.lastElementChild.children.length);
});
