// Mobile menu toggle
const navMenuOpen = () => {
  let mainBody = document.querySelector('.body');
  let pageWrapper = document.querySelector('.wrapper');
  let navToggle = document.querySelector('.navigation__button');

  mainBody.classList.remove('body--nojs');

  navToggle.addEventListener('click', function () {
    if (pageWrapper.classList.contains('menu--closed')) {
      pageWrapper.classList.remove('menu--closed');
      pageWrapper.classList.add('menu--opened');
    } else {
      pageWrapper.classList.add('menu--closed');
      pageWrapper.classList.remove('menu--opened');
    }
  });
};

export {navMenuOpen};
