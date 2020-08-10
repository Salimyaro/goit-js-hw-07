// В HTML есть пустой список ul#ingredients.

{/* < ul id = "ingredients" ></ >
	В JS есть массив строк. */}

const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredientsRef = document.querySelector('#ingredients');

function setElementChildsFromArray(array, parrentRef) {
	const tmp = [];
	for (const ingredient of array) {
		const item = document.createElement('li');
		item.textContent = ingredient
		tmp.push(item)
	}
	parrentRef.append(...tmp)
};

setElementChildsFromArray(ingredients, ingredientsRef)

console.log(ingredientsRef);