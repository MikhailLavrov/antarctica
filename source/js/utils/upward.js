const body = document.body;
const scrollButton = document.querySelector('.upward');
const footer = document.querySelector('.footer');

function scrollToTop() {
  window.scrollTo({
    top: '0',
  });
}

const upwardButtonInit = () => {
  if (scrollButton) {
    window.addEventListener('scroll', function () {

      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.round(window.scrollY);
      const footerHeight = footer.offsetHeight;
      const bodyHeight = body.offsetHeight;
      const heightBeforeFooter = bodyHeight - (viewportHeight + footerHeight);

      scrollButton.classList.toggle('upward--active', scrollProgress > 500 && scrollProgress <= heightBeforeFooter);
    });

    scrollButton.addEventListener('click', scrollToTop);
  }
};

export {upwardButtonInit};
