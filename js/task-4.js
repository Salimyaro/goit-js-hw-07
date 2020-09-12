const valueRef = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let counterValue = +valueRef.textContent;

function decrementCb() {
	counterValue -= 1;
	valueRef.textContent = counterValue;
}
function incrementCb() {
	counterValue += 1;
	valueRef.textContent = counterValue;
}

decrement.addEventListener('click', decrementCb);
increment.addEventListener('click', incrementCb);


// const valueRef = document.querySelector('#value');
// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');

// function decrementCb() {
//   valueRef.textContent = +valueRef.textContent - 1;
// }
// function incrementCb() {
// 	valueRef.textContent = +valueRef.textContent + 1;
// }

// decrement.addEventListener('click', decrementCb);
// increment.addEventListener('click', incrementCb);
