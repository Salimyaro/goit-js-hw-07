const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function outputCb(event) {
  outputRef.textContent = event.target.value || 'незнакомец';
}

inputRef.addEventListener('input', outputCb);
