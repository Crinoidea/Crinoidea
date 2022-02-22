'use strict';

const overlay = document.querySelector('.overlay'),
      hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header'),
      arr = [overlay, hamburger, menu, header];


function addActiveClass(element) {
    element.classList.add(`${element.classList[0]}_active`);

    document.body.style.overflow = 'hidden';
}
function removeActiveClass(element) {
    element.classList.remove(`${element.classList[0]}_active`);

    document.body.style.overflow = '';
}

function openMenu() {
    arr.forEach(item => {
        addActiveClass(item);
    })
}
function closeMenu() {
    arr.forEach(item => {
        removeActiveClass(item);
    })
}

function actionsWithMenu(trigger) {
    trigger.addEventListener('click', (event) => {
        const e = event.currentTarget;

        if (!e.classList.contains('header__hamburger_active')) {
            openMenu();
        } else {
            closeMenu();
        }
    })

    overlay.addEventListener('click', (event) => {
        if (event.target == overlay || event.target == overlay) {
            closeMenu();
        }
    });
    
    menu.addEventListener('click', (event) => {
        console.dir(event.target);
        if (event.target.tagName == 'A') {
            closeMenu();
        }
    });
}

actionsWithMenu(hamburger);






