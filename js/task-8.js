// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// < div id = "controls" >
// 	<input type="number" min="0" max="100" step="1" />
// 	<button type="button" data-action="render">Создать</button>
// 	<button type="button" data-action="destroy">Очистить</button>
// </ >

// 	<div id="boxes"></div>

const inpytRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const targetRef = document.querySelector('#boxes');

const createBoxes = amount => {
  console.log(amount);
  const rand = () => Math.floor(Math.random() * 255);
  for (let i = 0, edgeSize = 30; i < amount; i += 1, edgeSize += 10) {
    const item = document.createElement('div');
    item.style.width = `${edgeSize}px`;
    item.style.height = `${edgeSize}px`;
    item.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`;
    targetRef.append(item);
  }
};

const destroyBoxes = () => {
  [...targetRef.children].forEach(child => child.remove());
};
// const createCb = createBoxes.bind(this, inpytRef.value);
const createCb = () => createBoxes(inpytRef.value);
renderBtnRef.addEventListener('click', createCb);
destroyBtnRef.addEventListener('click', destroyBoxes);




// const inpytRef = document.querySelector('#controls input');
// const renderBtnRef = document.querySelector('[data-action="render"]');
// const destroyBtnRef = document.querySelector('[data-action="destroy"]');
// const targetRef = document.querySelector('#boxes');

// // console.dir(inpytRef);
// // console.log(inpytRef);
// const createBoxes = () => {
// 	if (inpytRef.value !== '') {
// 		destroyBoxes()
// 	};
// 	// console.dir(inpytRef.value);
// 	// console.log(inpytRef);
//   const rand = () => Math.floor(Math.random() * 255);
//   for (let i = 0, edgeSize = 30; i < inpytRef.value; i += 1, edgeSize += 10) {
// 		const item = document.createElement('div');
//     item.style.width = `${edgeSize}px`;
//     item.style.height = `${edgeSize}px`;
//     item.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`;
//     targetRef.append(item);
//   }
// 	// console.log(inpytRef.value);
// 	inpytRef.value = '';
// 	// console.log(inpytRef.value);
// };

// const destroyBoxes = () => {
//   [...targetRef.children].forEach(child => child.remove());
// };
// renderBtnRef.addEventListener('click', createBoxes);
// destroyBtnRef.addEventListener('click', destroyBoxes);
