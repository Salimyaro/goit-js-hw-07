const refs = {
  input: document.querySelector('.to-natural__input'),
  btn: document.querySelector('.to-natural__btn'),
  return: document.querySelector('.to-natural__return'),
};

refs.btn.addEventListener('click', changeReturnValue);

function changeReturnValue() {
  refs.return.textContent = getNaturalFromInput(refs.input.value);
}

function getNaturalFromInput(acc) {
  do {
    acc = step(acc);
  } while (acc > 9);
  return `return ${acc}`;
}

function step(numOrStr) {
  const string = '' + numOrStr;
  const arr = string.split('');
  let sum = 0;
  arr.forEach(num => {
    sum += +num;
  });
  return sum;
}
