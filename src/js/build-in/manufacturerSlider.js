import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function manufacturerSlider() {
    const manufacturer = document.querySelector('.manufacturer');
    if (!manufacturer) return;

    const slidesLength = document.querySelectorAll('.manufacturer__slider .swiper-slide').length;

    const swiper = new Swiper('.manufacturer__slider', {
        pagination: {
            el: document.querySelector('.manufacturer__slider .swiper-pagination'),
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'slider-bullet',
            bulletActiveClass: 'slider-bullet--active',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                initialSlide: slidesLength - 1,
                spaceBetween: 35,
                navigation: {
                    prevEl: manufacturer.querySelector('.js-prev-slide'),
                    nextEl: manufacturer.querySelector('.js-next-slide')
                },
            }
        }
    })

}