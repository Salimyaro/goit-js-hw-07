const inpytRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const targetRef = document.querySelector('#boxes');

const createBoxes = amount => {
  const rand = () => Math.floor(Math.random() * 255);
  for (let i = 0, edgeSize = 30; i < amount; i += 1, edgeSize += 10) {
    const box = document.createElement('div');
    box.style.width = `${edgeSize}px`;
    box.style.height = `${edgeSize}px`;
    box.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`;
    targetRef.append(box);
  }
};

const destroyBoxes = () => {
  inpytRef.value = 0;
  targetRef.innerHTML = '';
};
const createCb = () => createBoxes(inpytRef.value);
renderBtnRef.addEventListener('click', createCb);
destroyBtnRef.addEventListener('click', destroyBoxes);
