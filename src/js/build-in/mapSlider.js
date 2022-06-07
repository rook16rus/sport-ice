import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function mapSlider() {
    const swiper = new Swiper('.map__slider', {allowTouchMove: false})

    const circles = document.querySelectorAll('.map__circle');

    circles.forEach((circle, index) => {
        circle.addEventListener('mouseover', (e) => {
            swiper.slideTo(index);
        })
    })
}