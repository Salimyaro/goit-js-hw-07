const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);

const itemRef = document.querySelectorAll('.item');
itemRef.forEach((item) => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
})