var burgerBtn = document.querySelector('.main-header__toggle');
var mainHeader = document.querySelector('.main-header');

// mainHeader.classList.remove('no-js');
burgerBtn.addEventListener('click', function(){
  mainHeader.classList.toggle('is-open');
});
