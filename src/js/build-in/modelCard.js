import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function modelCard() {
    const modelCard = document.querySelector('.model-card');

    if (!modelCard) return;

    /* Инициализация слайдеров */

    const subImgSwiper = new Swiper('.model-card__sub-img-slider', {
        direction: "vertical",
        spaceBetween: 15,
        slidesPerView: "auto",
        on: {
            touchEnd: function(s,e) {
                let range = 5;
                let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                    - s.touches.startY;
                if (diff < range || diff > -range) s.allowClick = true;
            }
        }
    });

    const imgSwiper = new Swiper('.model-card__img-slider', {
        thumbs: {
            swiper: subImgSwiper
        },
        navigation: {
            nextEl: modelCard.querySelector('.js-next-slide'),
            prevEl: modelCard.querySelector('.js-prev-slide'),
        },
    })
}