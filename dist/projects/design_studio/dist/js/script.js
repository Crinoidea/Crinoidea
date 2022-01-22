'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Animation
    new WOW().init();

    //Modal
    const modalBtn = document.querySelector('[data-modal]'),
          modalBlock = document.querySelector('.modal');

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

        closeModalAside(block);
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

    function closeModalAside(block) {
        block.addEventListener('click', (event) => {
            if (event.target == block || event.target.getAttribute('data-close') == '') {
                closeModal(block);
            }
        });
    }

    //Send data
    const forms = document.querySelectorAll('form'),
          statusModal = document.querySelector('.registration'),
          statusHeader = document.querySelector('.registration__header'),
          statusImg = document.querySelector('.registration__check');

    const message = {
        success: 'subscription successful!',
        failure: 'Oops, error ;('
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                showThanksModal(statusModal);
                if (request.status === 200) {
                    showThanksModal(statusModal);
                    statusHeader.textContent = message.success;
                    statusImg.src = 'icons/checkmark.svg';
                } else {
                    showThanksModal(statusModal);
                    statusHeader.textContent = message.failure;
                    statusImg.src = 'icons/close.svg';
                }
            });
        });
    }

    function showThanksModal(modal) {

        openModal(modal);
        closeModalAside(modal);
        if (modalBlock.classList.contains('show')) {
            closeModal(modalBlock);
        }

        setTimeout(() => {
            closeModal(modal);
        }, 4000);
    }
});