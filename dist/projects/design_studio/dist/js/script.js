'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Animation
    new WOW().init();

    //Modal
    const modalBtn = document.querySelector('[data-modal]'),
          modalBlock = document.querySelector('.modal'),
          closeBtn = document.querySelector('.close');

    const sections = document.querySelectorAll('body > *');
    
    function openModal(block) {
        block.classList.add('show');
        block.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        sections.forEach(item => {
            if (item.classList.contains('sidepanel')) {
                    
            } else {
                item.style.paddingRight = '17px';
            }
        });
    }

    function closeModal(block) {
        block.classList.add('hide');
        block.classList.remove('show');
        document.body.style.overflow = '';

        sections.forEach(item => {
            if (item.classList.contains('sidepanel')) {
                    
            } else {
                item.style.paddingRight = '0px';
            }
        });
    }

    modalBtn.addEventListener('click', () => {
        openModal(modalBlock);
    });

    closeBtn.addEventListener('click', () => {
        closeModal(modalBlock);
    }); 

    function closeModalAside(block) {
        block.addEventListener('click', (event) => {
            if (event.target == block) {
                closeModal(block);
            }
        });
    }
    closeModalAside(modalBlock);

});