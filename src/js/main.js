$(document).ready(function () {

    let $pane_block__header = $('.pane_block__header'),
        pane_block__sub = '.pane_block__sub',
        $pane_block__sub = $('.pane_block__sub'),
        $sect4_slider = $('.sect4-slider'),
        $sect7_slider = $('.sect7-slider'),
        $sect10_slider = $('.sect10-slider'),
        $select = $('select'),
        prevArrow_h = '<button type="button" class="my-slick-prev-h"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.73682 8.30002L8.13305 13.6238C8.47462 13.8698 8.81878 14 9.10484 14C9.65789 14 10 13.5333 10 12.7522L10 1.24602C10 0.465773 9.65832 9.23804e-07 9.10657 8.75568e-07C8.82008 8.50522e-07 8.48141 0.130326 8.13909 0.377038L0.739407 5.70066C0.263535 6.04358 -2.98445e-07 6.50505 -3.41769e-07 7.00062C-0.00010815 7.49586 0.260409 7.95721 0.73682 8.30002Z" fill="white"/></svg></button>',
        nextArrow_h = '<button type="button" class="my-slick-next-h"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.26318 8.30002L1.86695 13.6238C1.52538 13.8698 1.18122 14 0.895157 14C0.342111 14 4.07983e-08 13.5333 1.09089e-07 12.7522L1.11499e-06 1.24602C1.1832e-06 0.465771 0.341681 -9.23804e-07 0.893434 -8.75568e-07C1.17993 -8.50522e-07 1.51859 0.130324 1.86091 0.377036L9.26059 5.70066C9.73646 6.04358 10 6.50505 10 7.00062C10.0001 7.49586 9.73959 7.95721 9.26318 8.30002Z" fill="white"/></svg></button>',
        prevArrow_v = '<button type="button" class="my-slick-prev-v"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.69998 0.73682L0.376244 8.13305C0.130212 8.47462 1.54898e-07 8.81878 1.17386e-07 9.10484C4.48624e-08 9.65789 0.466678 10 1.24784 10L12.754 10C13.5342 10 14 9.65832 14 9.10657C14 8.82008 13.8697 8.48141 13.623 8.13909L8.29934 0.739408C7.95642 0.263536 7.49495 2.91699e-08 6.99938 -3.5817e-08C6.50414 -0.000107866 6.04279 0.260409 5.69998 0.73682Z" fill="white"/></svg></button>',
        nextArrow_v = '<button type="button" class="my-slick-next-v"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.69998 9.26318L0.376243 1.86695C0.130212 1.52538 -1.54898e-07 1.18122 -1.17386e-07 0.895157C-4.48624e-08 0.342111 0.466678 6.11974e-08 1.24784 1.63634e-07L12.754 1.67248e-06C13.5342 1.7748e-06 14 0.341681 14 0.893434C14 1.17993 13.8697 1.51859 13.623 1.86092L8.29934 9.26059C7.95642 9.73646 7.49495 10 6.99938 10C6.50414 10.0001 6.04279 9.73959 5.69998 9.26318Z" fill="white"/></svg></button>';

    function arrows_position(parent_container, type) {
        let $parent = $(parent_container),
            $slick_prev_v = $parent.find('.my-slick-prev-v'),
            $slick_next_v = $parent.find('.my-slick-next-v'),
            dots_height_v = $parent.find('.my-slick-dots-v').height(),
            position_v = dots_height_v / 2 + 10,
            $slick_prev_h = $parent.find('.my-slick-prev-h'),
            $slick_next_h = $parent.find('.my-slick-next-h'),
            dots_height_h = $parent.find('.my-slick-dots-h').width(),
            position_h = dots_height_h / 2 + 10;

        if (type === 0) {
            $slick_prev_v.css('top', `calc(50% + -${position_v}px`);
            $slick_next_v.css('top', `calc(50% + ${position_v}px`);
        } else {
            $slick_prev_h.css('left', `calc(50% + -${position_h}px`);
            $slick_next_h.css('left', `calc(50% + ${position_h}px`);
        }
    }


    /*
    * slick
    * */
    $sect4_slider
        .slick({
            infinite: true,
            vertical: true,
            dots: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            pauseOnHover: false,
            pauseOnDotsHover: true,
            adaptiveHeight: true,
            autoplaySpeed: 4000,
            dotsClass: 'my-slick-dots-v',
            prevArrow: prevArrow_v,
            nextArrow: nextArrow_v,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        vertical: false,
                        dotsClass: 'my-slick-dots-h',
                        prevArrow: prevArrow_h,
                        nextArrow: nextArrow_h,
                    }
                },
            ]
        });

    $(window).on('load resize orientationchange', function () {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            $sect4_slider
                .on('init', arrows_position('.sect4-slider', 1));
        } else {
            $sect4_slider
                .on('init', arrows_position('.sect4-slider', 0));
        }
    });

    $sect7_slider
        .slick({
            infinite: true,
            autoplay: true,
            pauseOnHover: false,
            autoplaySpeed: 3000,
            dots: false,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });

    $sect10_slider
        .slick({
            infinite: true,
            dots: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            dotsClass: 'my-slick-dots-h',
            prevArrow: prevArrow_h,
            nextArrow: nextArrow_h,
        })
        .on('init', arrows_position('.sect10-slider', 1));

    $select.styler();


    /*
    * FAQ
    * */
    $pane_block__header.click(function () {
        if ($(this).parent().children(pane_block__sub).is(':visible')) {
            $pane_block__sub.slideUp().siblings('normal');
            $pane_block__header.removeClass("active");
            $pane_block__header.parent().removeClass("active");
        } else {
            $pane_block__sub.slideUp().siblings('normal');
            $pane_block__header.removeClass("active");
            $pane_block__header.parent().removeClass("active");
            $(this).toggleClass("active");
            $(this).parent().children(pane_block__sub).slideToggle().siblings('normal');
            $(this).parent().toggleClass("active");
        }
    });


    /*
    * form sect5
    * */
    let $brand_select_box = document.getElementById('brand-styler'),
        $brand_select_box_dropdown = $brand_select_box.querySelector('.jq-selectbox__dropdown'),
        $brand_select_box_dropdown_li = $brand_select_box_dropdown.querySelectorAll('li'),
        $brand_select = document.getElementById('brand'),

        $model_select_box = document.getElementById('model-styler'),
        $model_select_box_dropdown = $model_select_box.querySelector('.jq-selectbox__dropdown'),
        $model_select_box_dropdown_li = $model_select_box_dropdown.querySelectorAll('li'),
        $model_select = document.getElementById('model'),
        model_disabled = $model_select.hasAttribute('disabled'),

        $year_select_box = document.getElementById('year-styler'),
        $year_select_box_dropdown = $year_select_box.querySelector('.jq-selectbox__dropdown'),
        $year_select_box_dropdown_li = $year_select_box_dropdown.querySelectorAll('li'),
        $year_select = document.getElementById('year'),
        year_disabled = $year_select.hasAttribute('disabled');


    // function select_refresh(e, id, attr, value){
    //     e.preventDefault();
    //     /* делаем чекбокс неактивным */
    //     $(`#${id}`).attr(attr, value)
    //     /* обновляем состояние псевдочекбокса */
    //         .trigger('refresh');
    // }

    $(function() {
        let $brand_select = $('#brand'),
            $brand_select_box = $('#brand-styler'),
            $brand_select_box_dropdown = $brand_select_box.find('.jq-selectbox__dropdown'),
            $brand_select_box_dropdown_li = $brand_select_box_dropdown.find('li'),

            $model_select = $('#model'),
            $model_select_box = $('#model-styler'),
            $model_select_box_dropdown = $model_select_box.find('.jq-selectbox__dropdown'),
            $model_select_box_dropdown_li = $model_select_box_dropdown.find('li'),
            model_disabled = $model_select.attr('disabled');

        $brand_select_box_dropdown_li.on('click', function() {
            let $this = $(this),
                $this_data_brand = $this.attr('data-brand'),
                this_brand_option = $brand_select.find(`option[data-brand="${$this.attr('data-brand')}"]`),
                models_li_not_this_brand = $model_select_box.find(`li:not([data-brand="${$this_data_brand}"])`),
                models_li_this_brand = $model_select_box.find(`li[data-brand="${$this_data_brand}"]`);

            models_li_not_this_brand.css('display', 'none');
            models_li_this_brand.css('display', 'list-item');

        })

        $model_select_box_dropdown_li.on('click', function () {

            // e.preventDefault();

            let $this = $(this);

            $brand_select
                .val($this.attr('data-brand'))
                .trigger('refresh');
        })
    });

    // якорные ссылки
    $("body").on('click', '[href*="#"]', function(e){
        let fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
        e.preventDefault();
    });

    //Фиксированное меню
    let navbar = document.getElementById('navbarId');

    let offsetNavbar = navbar.offsetTop;

    window.onscroll = function() {
        if(window.scrollY > offsetNavbar) {
            if(!navbar.classList.contains('position-fixed')) {
                navbar.classList.add('position-fixed');
                navbar.classList.add('bs-navbar');
            }
        } else {
            if(navbar.classList.contains('position-fixed')) {
                navbar.classList.remove('position-fixed');
                navbar.classList.remove('bs-navbar');
            }
        }
    };

    // Animations

    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {

        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-off')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }

        setTimeout(() => {
            animOnScroll();
        }, 300);

    }

    // stop video after close popup
    let modal_iframe = $('#modal-sect2 iframe');
    $('#modal-sect2 .md-close').on('click', function () {
        let url = modal_iframe.attr('src');
        // console.log(url);
        modal_iframe.attr('src', '');
        modal_iframe.attr('src', url);
    });
    $('#modal-sect2 ~ .md-overlay').on('click', function () {
        let url = modal_iframe.attr('src');
        // console.log(url);
        modal_iframe.attr('src', '');
        modal_iframe.attr('src', url);
    });
});