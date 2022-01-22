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
            if (!item.classList.contains('sidepanel')) {
                item.style.paddingRight = '17px';
            }
            if (document.documentElement.clientWidth <= 576) {
                item.style.paddingRight = '0px';
            }
        });
    }

    function closeModal(block) {
        block.classList.add('hide');
        block.classList.remove('show');
        document.body.style.overflow = '';

        sections.forEach(item => {
            if (!item.classList.contains('sidepanel')) {
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

    //Send data
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Loading...',
        failure: 'Oops, error ;('
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = message.loading;

            
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                }
                else {
                    console.log(message.failure);
                }
            });
        });
    }


});