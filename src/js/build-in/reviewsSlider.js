import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function reviewsSlider() {
    const swiper = new Swiper('.reviews__slider', {
        spaceBetween: 25,
        
    });
}