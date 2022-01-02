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
const percents = document.querySelectorAll('.scale__item-percent'),
      lines = document.querySelectorAll('.scale__item-progress span');

percents.forEach( (item, i) => {
      lines[i].style.width = item.innerHTML;
});

/* scroll to a section */
const promo = document.getElementById('promo'),
      about = document.getElementById('about'),
      benefit = document.getElementById('benefit'),
      skills = document.getElementById('skills'),
      portfolio = document.getElementById('portfolio'),
      contact = document.getElementById('contact'),

      menuLinks = document.querySelectorAll('.menu__link'),
      promoLinks = document.querySelectorAll('.promo__link');

function smoothScroll (wrapper, section, numberOfLink) {
    wrapper[numberOfLink].addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.remove('active');
        section.scrollIntoView({block:'start', behavior: "smooth"});
    });
}

smoothScroll(menuLinks, about, 0);
smoothScroll(menuLinks, benefit, 1);
smoothScroll(menuLinks, skills, 2);
smoothScroll(menuLinks, portfolio, 3);
smoothScroll(menuLinks, contact, 4);
smoothScroll(promoLinks, portfolio, 0);
smoothScroll(promoLinks, about, 1);


//scroll to top
const pageUp = document.querySelector('[href="#up"]');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 600) {
        pageUp.classList.add('show');
        pageUp.classList.remove('hide');
    } 
    if (document.documentElement.scrollTop < 600) {
        pageUp.classList.add('hide');
        pageUp.classList.remove('show');
    }
});

pageUp.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

