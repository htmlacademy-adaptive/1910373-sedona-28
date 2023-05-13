const burgerBtn = document.querySelector('.main-header__toggle');
const mainHeader = document.querySelector('.main-header');

mainHeader.classList.remove('no-js');
burgerBtn.addEventListener('click', () => mainHeader.classList.toggle('is-open'));

