const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', cb);

function cb(event) {
  if (event.target.value.length === +event.target.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}