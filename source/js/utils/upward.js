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

      // eslint-disable-next-line no-console
      console.log(`1. viewportHeight: ${viewportHeight}`);
      // eslint-disable-next-line no-console
      console.log(`2. scrollProgress: ${scrollProgress}`);
      // eslint-disable-next-line no-console
      console.log(`3. bodyHeight: ${bodyHeight}`);
      // eslint-disable-next-line no-console
      console.log(`4. footerHeight: ${footerHeight}`);
      // eslint-disable-next-line no-console
      console.log(`5. if ${scrollProgress} >= ${heightBeforeFooter}`);

      scrollButton.classList.toggle('active', scrollProgress > 500 && scrollProgress <= heightBeforeFooter);
    });

    scrollButton.addEventListener('click', scrollToTop);
  }
};

export {upwardButtonInit};
