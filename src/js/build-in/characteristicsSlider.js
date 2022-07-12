import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function characteristicsSlider() {

    /* Инициализация свайпера */

    const characteristics = document.querySelector('.model-info__characteristic-slider');

    if (!characteristics) return

    const swiper = new Swiper('.model-info__characteristic-slider', {
        slidesPerView: 1,
        pagination: {
            el: characteristics.querySelector('.swiper-pagination'),
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'slider-bullet',
            bulletActiveClass: 'slider-bullet--active',
        },
        autoHeight: true,
        breakpoints: {
            640: {
                autoHeight: false,
                slidesPerView: 3,
                grid: {
                    rows: 3,
                    fill: "row",
                }
            }
        },
    })


}