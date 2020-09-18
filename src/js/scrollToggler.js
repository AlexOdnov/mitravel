const scrollToggler = (targetElement, activeClass = 'active') => {
  //targetElement элемент у которого проверяется наличие класса
  //activeClass класс при наличии которого отключается скролл

  const scrollWidth = window.innerWidth - document.body.offsetWidth + 'px';

  const fixedElements = document.querySelectorAll('[data-fixed="true"]');

  if (targetElement.classList.contains(activeClass)) {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = scrollWidth;
    fixedElements.forEach((el) => {
      el.style.marginRight = scrollWidth;
    });
  } else {
    document.body.style.overflowY = '';
    document.body.style.paddingRight = 0;
    fixedElements.forEach((el) => {
      el.style.marginRight = 0;
    });
  }
};

export default scrollToggler;
