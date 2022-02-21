'use strict';

const overlay = document.querySelector('.overlay'),
      hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header');


function addActiveClass(element) {
    element.classList.add(`${element.classList[0]}_active`);

    document.body.style.overflow = 'hidden';
}
function removeActiveClass(element) {
    element.classList.remove(`${element.classList[0]}_active`);

    document.body.style.overflow = '';
}


function actionsWithMenu(trigger) {
    trigger.addEventListener('click', (event) => {
        const e = event.currentTarget;

        if (!e.classList.contains('header__hamburger_active')) {
            addActiveClass(overlay);
            addActiveClass(hamburger);
            addActiveClass(menu);
            addActiveClass(header);
        } else {
            removeActiveClass(overlay);
            removeActiveClass(hamburger);
            removeActiveClass(menu);
            removeActiveClass(header);
        }
    })
}

overlay.addEventListener('click', (event) => {
    if (event.target == overlay) {
        removeActiveClass(overlay);
        removeActiveClass(hamburger);
        removeActiveClass(menu);
        removeActiveClass(header);
    }
});
actionsWithMenu(hamburger);






