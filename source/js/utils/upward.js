const scrollThumb = document.querySelector('.upward');

function scrollToTop() {
  window.scrollTo({
    top: '0',
  });
}

const upwardButtonInit = () => {
  if (scrollThumb) {
    window.addEventListener('scroll', function () {
      scrollThumb.classList.toggle('active', window.scrollY > 500);
    });

    scrollThumb.addEventListener('click', scrollToTop);
  }
};

export {upwardButtonInit};
