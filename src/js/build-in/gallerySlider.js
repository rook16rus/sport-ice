import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function gallerySlider() {
    if (document.documentElement.clientWidth > 640) return;

    const swiper = new Swiper('.gallery .swiper', {
        touchRatio: 1,
        effect: 'flip',
        flipEffect: {
            slideShadows: false,
        },
        pagination: {
            el: document.querySelector('.gallery .swiper-pagination'),
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'slider-bullet',
            bulletActiveClass: 'slider-bullet--active',
        }
    })
}