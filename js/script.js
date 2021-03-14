let hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.rating__item-percent'),
      lines = document.querySelectorAll('.rating__line span');

percents.forEach((iteam, i)  => {
    lines[i].style.width = iteam.innerHTML;
});


      