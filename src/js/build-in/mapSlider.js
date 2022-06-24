import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function mapSlider() {
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

    const circles = document.querySelectorAll('.map__circle');

    circles.forEach((circle, index) => {
        circle.addEventListener('mouseover', (e) => {
            swiper.slideTo(index);
        })
    })
}