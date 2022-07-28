import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function reviewsSlider() {
    const slider = document.querySelector('.reviews__slider');

    const swiper = new Swiper('.reviews__slider', {
        spaceBetween: 25,
        breakpoints: {
            280: {slidesPerView: 1.4},
            640: {slidesPerView: 3.5},
            1800: {slidesPerView: "auto"}
        },
        pagination: {
            el: slider.querySelector('.swiper-pagination'),
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'slider-bullet',
            bulletActiveClass: 'slider-bullet--active',
        },
        navigation: {
            nextEl: slider.closest('.js-init-slider-container').querySelector('.js-next-slide'),
            prevEl: slider.closest('.js-init-slider-container').querySelector('.js-prev-slide'),
        }
    });
}