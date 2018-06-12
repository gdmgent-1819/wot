function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

ready(function () {
    const Course = {
        init() {
            this.initSidebar();
            this.initScrollButtons();
        },
        initScrollButtons() {
            const $body = document.body;
            const $scrollToTopButton = document.getElementById('scroll-to-top');
            const scrollTreshold = window.innerHeight / 3;

            window.onscroll = function (event) {
                    if (window.pageYOffset < scrollTreshold) {
                        $scrollToTopButton.style.display = 'none';
                    } else {
                        $scrollToTopButton.style.display = 'block';
                    }
                };

            $scrollToTopButton
                .addEventListener('click', function (event) {
                    scrollTo($body, 0, 400); 
                });
        },
        initSidebar() {
            const $sidebar = document.getElementById('sidebar');
            const $collapseButton = document.getElementById('sidebar-collapse-button');
            $collapseButton.addEventListener('click', function () {
                if ($sidebar.classList.contains('ahs-sidebar-open')) {
                    $sidebar.classList.remove('ahs-sidebar-open');
                } else {
                    $sidebar.classList.add('ahs-sidebar-open');
                }
            });

            // Hide unnecessary nav lists
            $('body').on('click', '.nav__list--level-0 > .nav__item > .nav__link', function (event) {
                event.preventDefault();
            });
            $('.nav__item--active')
                .parents('.nav__list--level-1')
                    .parent()
                        .addClass('nav__item--active-parent')
                    .siblings()
                        .find('.nav__list--level-1')
                            .addClass('nav__list--closed');
            $('body')
                .on('click', '.nav__list--level-0 > :not(.nav__item--active-parent) > .nav__link', function () {
                    $('.nav__list--opened')
                        .addClass('nav__list--closed')
                        .removeClass('nav__list--opened');
                    $(this).siblings('.nav__list')
                        .addClass('nav__list--opened')
                        .removeClass('nav__list--closed');
                });
            // Scroll to item
            const url = new URL(document.location.href);
            // console.log('scrolling');
            const scrollHeaderHeight = $('.ahs-header').height() + 5;
            let scrollToOffset = 0;
            try {
                scrollToOffset = $(`[href='${url.pathname}']`).offset().top;
            } catch (e) {}
            $('.ahs-sidebar__body').animate(
                { scrollTop: scrollToOffset - scrollHeaderHeight }, 0
            )
        }
    };
    Course.init();
});