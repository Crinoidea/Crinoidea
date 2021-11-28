/* При клике на гамбургер открывается меню, при клике на крестик меню закрывается */

const hamburger = document.querySelector('.hamburger'), 
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

/* const hamburger - создаём переменную
document - обращаемся к index.html 
querySelector - получаем элемент по селектору .hamburger
menu = document.querySelector('.menu') - обращаемся к классу меню
closeElem = document.querySelector('.menu__close'); - обращаемся к крестику close 

hamburger.addEventListener('click', () => - отслеживаем все клики по гамбургеру
menu.classList.add('active'); - после клика обращаемся к списку классов меню и выбираем класс активности

menu.classList.remove('active'); - убираем класс активности */



/* При изменении процентов, линия автоматически заполняется на это число
 */
const percents = document.querySelectorAll('.scale__item-percent')
    lines = document.querySelectorAll('.scale__item-progress span');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;

});

/* const percents - создаём переменную
document - обращаемся к index.html 
querySelector - получаем элемент по селектору .scale__item-percent
lines = document.querySelectorAll('.scale__item-progress span'); - создаем еще одну переменную
querySelectorAll - получем все элементы по определенному селектору .scale__item-progress span

percents.forEach( (item,i) => { - каждый элемент, который перебирается
lines[i].style.width = item.innerHTML; - обращаемся к лайнс, 
для выбора конкретного номера - i; 
в этом конкретном элементе подставляем style.width, которое вытаскиваем с item.innerHTML (содержимое) */
