var burgerBtn = document.querySelector('.main-header__toggle');
var navList = document.querySelector('.site-nav');
var logo = document.querySelector('.main-nav__logo');

burgerBtn.addEventListener('click', function(){
  navList.classList.toggle('site-nav--hide');
  logo.classList.toggle('main-nav__logo--hide');
});

document.addEventListener('keydown', function(evt){
  if (evt.keyCode === 27) {
    navList.classList.add('site-nav--hide');
    logo.classList.remove('main-nav__logo--hide');
  }
});

navList.addEventListener('click', function(){
  navList.classList.add('site-nav--hide');
});

document.addEventListener('click', function(evt){
  var click = evt.composedPath().includes(burgerBtn);
  if(!click) {
    navList.classList.add('site-nav--hide');
    logo.classList.remove('main-nav__logo--hide');
  }
});
