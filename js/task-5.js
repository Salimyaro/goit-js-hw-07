const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function outputCb(event) {
  event.target.value === ''
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = event.target.value);
}

inputRef.addEventListener('input', outputCb);
