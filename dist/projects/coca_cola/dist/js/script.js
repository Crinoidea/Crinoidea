$( document ).ready(function() {

    //open menu
    const menu = $('.menu__block'),
          trigger = $('.menu__close'),
          menuOverlay = $('.menu__overlay'),
          menuNav = $('.menu__nav'),
          menuNavItem = $('.menu__link');
    
    function showContent(item) {
        item.addClass('show');
        item.removeClass('hide');
    }
    function hideContent(item) {
        item.addClass('hide');
        item.removeClass('show');
    }
    function closeMenu() {
        $(menu).removeClass('menu__block_active');
        $(trigger).removeClass('menu__close_active');
        
        hideContent(menuNav);
        hideContent(menuOverlay);
    }
    
    function openMenu() {
        $(trigger).on('click', () => {
            if (!menu.hasClass('menu__block_active') && !trigger.hasClass('menu__close_active')) {
                $(menu).addClass('menu__block_active');
                $(trigger).addClass('menu__close_active');
    
                showContent(menuNav);
                showContent(menuOverlay);
                
                $(menuOverlay).on('click', () => {
                    closeMenu();
                });
                $(menuNavItem).each((index, item) => {
                    $(item).on('click', () => {
                        closeMenu();
                    });
                });
            } else {
                closeMenu();
            }
        });
    }
    openMenu();

 
    //Tabs present

    const tabs = $('.product__presents-item'),
          tabsContent = $('.product__content');

    function showTabsContent(index = 0) {
        $(tabsContent[index]).addClass('show_flex', 'fade');
        $(tabsContent[index]).removeClass('hide');

        $(tabs[index]).addClass('product__presents-item_active');
    }

    function hideTabsContent() {
        $(tabsContent).each((index, item) => {
            $(item).removeClass('show_flex', 'fade');
            $(item).addClass('hide');
        });
        
        $(tabs).each((index, item) => {
            $(item).removeClass('product__presents-item_active');
        });
    }
    
    $(tabs).each((index, item) => {
        $(item).on('click', () => {
                hideTabsContent();
                showTabsContent(index);
            }        
        );
    });

    // Scroll page
    function smoothScroll(links, sections) {
        links.each((index, link) => {
            $(link).on('click', (e) => {
                e.preventDefault();

                sections.each((index, item) => {
                    if (item.className == $(link).attr('href').slice(1)) {
                        $('html, body').animate({
                            scrollTop: $(item).offset().top  
                        }, 1000);
                    }
                });
            });
        });
    }

    if (document.documentElement.clientWidth > 576) {
        $.scrollify({
            section : "section",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: false,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll: false,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {
                $("a").on("click",$.scrollify.move);
            }
        });
    } else {
        smoothScroll($('[href*="#"]'), $('section'));
    }

    // move Snowflake

    function parallaxScroll() {
        if (window.pageYOffset > $('.product').offset().top - 5) {
            $('.snowflake').css('bottom', '-400'+'px');
        } else {
            $('.snowflake').css('bottom', '40'+'px');
        }
    }
    
    $(window).bind('scroll', function (event) {
        event.preventDefault();
        parallaxScroll();
    });
});

