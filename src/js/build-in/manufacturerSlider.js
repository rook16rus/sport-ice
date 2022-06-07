import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function manufacturerSlider() {
    const manufacturer = document.querySelector('.manufacturer');
    if (!manufacturer) return;

    const slidesLength = document.querySelectorAll('.manufacturer__slider .swiper-slide').length;

    const swiper = new Swiper('.manufacturer__slider', {
        slidesPerView: 1.3,
        initialSlide: slidesLength - 1,
        spaceBetween: 35,
        navigation: {
            prevEl: manufacturer.querySelector('.js-prev-slide'),
            nextEl: manufacturer.querySelector('.js-next-slide')
        }
    })

}