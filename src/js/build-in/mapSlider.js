import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";
import ar from "@fancyapps/ui/src/Fancybox/l10n/ar";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function mapSlider() {

    /* Иницализация свайперов */

    const swiper = new Swiper('.map__slider', {
        pagination: {
            el: document.querySelector('.map__slider .swiper-pagination'),
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'slider-bullet',
            bulletActiveClass: 'slider-bullet--active',
        },
        breakpoints: {
            640: {
                allowTouchMove: false,
            }
        }
    })

    const citiesSwiper = new Swiper('.map__cities', {
        slidesPerView: "auto",
        freeMode: true,
        centeredSlides: true
    })

    /* Смена слайда при наведении на отметку */

    const circles = document.querySelectorAll('.map__circle');

    circles.forEach((circle, index) => {
        index += 1;

        circle.addEventListener('mouseenter', (e) => {
            $(".map .card-slider .card-slider-slide[data-class=" + index + "]").hide().prependTo(".map .card-slider").fadeIn();
            $.each($('.map .card-slider-slide'), function (i, slide) {
                $(slide).attr('data-position', i + 1);
            });
        })
    })

    /* Синхронизация карточного слайдера со слайдером городов */

    const buttonPrev = document.querySelector('.map__slider-prev');
    const buttonNext = document.querySelector('.map__slider-next');

    if (!buttonPrev) return

    buttonPrev.addEventListener('click', (e) => {
        const activeIndex = document.querySelector('.map__slide:first-child').dataset.class * 1;

        citiesSwiper.slides.forEach((slide, index, array) => {
            slide.classList.remove('active');
            if (activeIndex === 1) {
                if (array[array.length - 1].classList.contains('active')) return;
                array[array.length - 1].classList.add('active')
                citiesSwiper.slideTo(array.length - 1)
            } else {
                if (array[activeIndex - 2].classList.contains('active')) return;
                array[activeIndex - 2].classList.add('active')
                citiesSwiper.slideTo(activeIndex - 2)
            }
        });
    });

    buttonNext.addEventListener('click', () => {
        const activeIndex = document.querySelector('.map__slide:first-child').dataset.class * 1;

        citiesSwiper.slides.forEach((slide, index, array) => {
            slide.classList.remove('active');
            if (activeIndex === array.length) {
                if (array[0].classList.contains('active')) return;
                array[0].classList.add('active')
                citiesSwiper.slideTo(0)
            } else {
                if (array[activeIndex].classList.contains('active')) return;
                array[activeIndex].classList.add('active')
                citiesSwiper.slideTo(activeIndex)
            }
        });
    });
}

