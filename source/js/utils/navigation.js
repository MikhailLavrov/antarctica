let bodyElement = document.body;
let pageWrapperElement = bodyElement.querySelector('.wrapper');
let navButtonElement = bodyElement.querySelector('.navigation__button');
let headerLogoElement = bodyElement.querySelector('.header__logo').querySelector('svg');
let sectionElement = bodyElement.querySelector('section');
let pageContent = sectionElement.innerHTML;

const closeNavigation = ({target}) => {
  if (!target.closest('.navigation') || target.closest('.navigation__item')) {
    bodyElement.classList.remove('menu-opened');
    bodyElement.classList.remove('scroll-lock');

    document.removeEventListener('click', closeNavigation);
  }

  // скрывает контент страницы при ОТКРЫТОМ меню
  if (bodyElement.classList.contains('menu-opened')) {
    sectionElement.innerHTML = '';
    headerLogoElement.classList.add('visually-hidden');
  } else {
    sectionElement.innerHTML = pageContent;
    headerLogoElement.classList.remove('visually-hidden');
  }
};

const closeOnResize = () => {
  if (document.body.offsetWidth > '767') {
    sectionElement.innerHTML = pageContent;
    headerLogoElement.classList.remove('visually-hidden');
    bodyElement.classList.remove('scroll-lock');
    bodyElement.classList.remove('menu-opened');
  }
};

// Mobile menu toggle
const navMenuOpen = () => {
  if (pageWrapperElement.classList.contains('wrapper--nojs')) {
    pageWrapperElement.classList.remove('wrapper--nojs');
  }

  if (navButtonElement) {
    navButtonElement.addEventListener('click', function () {
      bodyElement.classList.toggle('menu-opened');
      bodyElement.classList.toggle('scroll-lock');

      document.addEventListener('click', closeNavigation);
    });
    window.addEventListener('resize', closeOnResize);
  }
};

export {navMenuOpen};
