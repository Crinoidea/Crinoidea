'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Animation
    new WOW().init();

    //Modal
    const modalBtn = document.querySelector('[data-modal]'),
          modalBlock = document.querySelector('.modal'),
          closeBtn = document.querySelector('.close');
    
    function openModal(block) {
        block.classList.add('show');
        block.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(block) {
        block.classList.add('hide');
        block.classList.remove('show');
        document.body.style.overflow = '';
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