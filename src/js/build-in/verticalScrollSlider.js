import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs]);

export default function verticalScrollSlider() {

    /* Инициализация слайдеров */

    const awardsSwiper = new Swiper('.js-vertical-scroll-slider', {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 150,
    })

    const imgSwiper = new Swiper('.js-vertical-scroll-img-slider', {
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: awardsSwiper,
        },
        allowTouchMove: false
    })

    /* Переключение слайдера в зависимости от позиции относительно окна */

    const awardsSlides = document.querySelectorAll('.js-vertical-scroll-slide');
    const swipePosition = 200;
    window.activeSlide = null;

    window.addEventListener('scroll', () => {
        awardsSlides.forEach((slide, index) => {
            if (slide.getBoundingClientRect().top <= swipePosition && slide.getBoundingClientRect().bottom > swipePosition) {
                if (slide !== activeSlide) {
                    window.activeSlide = slide;
                    imgSwiper.slideTo(index);
                }
            }
        })
    })
}