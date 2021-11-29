/* hamburger */

const hamburger = document.querySelector('.hamburger'), 
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

/* percents */
const percents = document.querySelectorAll('.scale__item-percent');
    lines = document.querySelectorAll('.scale__item-progress span');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;

});

