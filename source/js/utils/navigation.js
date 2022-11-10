// Mobile menu toggle
const navMenuOpen = () => {
  let navMain = document.querySelector('.header__navigation');
  let navToggle = document.querySelector('.navigation__button');
  let mainBody = document.querySelector('.body');
  let header = document.querySelector('.header');

  mainBody.classList.remove('body--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__navigation--closed')) {
      navMain.classList.remove('header__navigation--closed');
      navMain.classList.add('header__navigation--opened');
      header.classList.add('header--opened');
    } else {
      navMain.classList.add('header__navigation--closed');
      navMain.classList.remove('header__navigation--opened');
      header.classList.remove('header--opened');
    }
  });
};

export {navMenuOpen};
