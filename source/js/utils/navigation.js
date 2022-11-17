let bodyElement = document.body;
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
    // eslint-disable-next-line no-console
    console.log(document.body.offsetWidth);
    sectionElement.innerHTML = pageContent;
    headerLogoElement.classList.remove('visually-hidden');
    bodyElement.classList.remove('scroll-lock');
    bodyElement.classList.remove('menu-opened');
  }
};

// Mobile menu toggle
const navMenuOpen = () => {
  if (bodyElement.classList.contains('body--nojs')) {
    bodyElement.classList.remove('body--nojs');
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
