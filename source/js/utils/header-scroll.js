const colorHeaderOnScroll = () => {
  let minOffset = 100;
  window.onscroll = function () {
    let hasClass = document.body.classList.contains('is_scrolled');

    if (minOffset < document.documentElement.scrollTop) {
      if (!hasClass) {
        document.body.classList.add('is_scrolled');
      }
    } else if (hasClass) {
      document.body.classList.remove('is_scrolled');
    }
  };
};

export {colorHeaderOnScroll};
