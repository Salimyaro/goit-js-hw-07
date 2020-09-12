const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...ingredients.map((item) => {
	const el = document.createElement('li');
	el.textContent = item;
	return el
}))