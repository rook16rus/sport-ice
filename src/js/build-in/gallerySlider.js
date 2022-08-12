import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function gallerySlider() {
    const gallerySlides = document.querySelectorAll('.gallery .swiper-slide');
    if (gallerySlides.length > 1) return;

    const navigation = document.querySelector('.gallery .slider-navigation');
    if (navigation) navigation.remove();
}