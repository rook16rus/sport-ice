import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

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

    /* Смена слайда при нажатии на город (кнопки, пагинацию) на мобилке */

    const mapCities = document.querySelectorAll('.map__cities-slide');
    const sliderDots = document.querySelectorAll('.map__slider-dots button');
    const buttonPrev = document.querySelector('.map__slider-prev');
    const buttonNext = document.querySelector('.map__slider-next');

    mapCities.forEach((city, index) => {
        index += 1;

        city.addEventListener('click', () => {
            $(".map .card-slider .card-slider-slide[data-class=" + index + "]").hide().prependTo(".map .card-slider").fadeIn();
            $.each($('.card-slider-slide'), function (i, slide) {
                $(slide).attr('data-position', i + 1);
            });

            citiesSwiper.slideTo(index - 1);
            citiesSwiper.slides.forEach((slide, index) => {
                (index === citiesSwiper.activeIndex) ? slide.classList.add('active') : slide.classList.remove('active');
            });
        })
    })

    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            citiesSwiper.slideTo(index);
            citiesSwiper.slides.forEach((slide, index) => {
                (index === citiesSwiper.activeIndex) ? slide.classList.add('active') : slide.classList.remove('active');
            });
        })
    })

    buttonPrev.addEventListener('click', () => {
        (citiesSwiper.activeIndex === 0) ? citiesSwiper.slideTo(citiesSwiper.activeIndex - 1) : citiesSwiper.slidePrev();
        citiesSwiper.slides.forEach((slide, index) => {
            (index === citiesSwiper.activeIndex) ? slide.classList.add('active') : slide.classList.remove('active');
        });
    });

    buttonNext.addEventListener('click', () => {
        (citiesSwiper.activeIndex === citiesSwiper.slides.length - 1) ? citiesSwiper.slideTo(0) : citiesSwiper.slideNext();
        citiesSwiper.slides.forEach((slide, index) => {
            (index === citiesSwiper.activeIndex) ? slide.classList.add('active') : slide.classList.remove('active');
        });
    });
}

