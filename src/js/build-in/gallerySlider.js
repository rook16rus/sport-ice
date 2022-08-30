import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function gallerySlider() {
    const gallery = document.querySelector('.model-gallery');
    if (!gallery) return;

    const swiper = new Swiper('.model-gallery__slider', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
        grid: {
            fill: 'row',
            rows: 2
        },
        navigation: {
            nextEl: gallery.querySelector('.js-next-slide'),
            prevEl: gallery.querySelector('.js-prev-slide'),
        }
    })

    const gallerySlides = document.querySelectorAll('.gallery .swiper-slide');
    if (gallerySlides.length > 1) return;

    const navigation = document.querySelector('.gallery .slider-navigation');
    if (navigation) navigation.remove();
}