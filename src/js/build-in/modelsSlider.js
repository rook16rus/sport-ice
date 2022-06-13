import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";
import gsap from 'gsap';
import modals from "./modals";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function modelsSlider() {
    const models = document.querySelector('.models');
    if (!models) return;

    /* Инициализация слайдеров */

    const listSwiper = new Swiper('.models__list-slider', {
        direction: "vertical",
        spaceBetween: 40,
        slidesPerView: "auto",
        allowTouchMove: false,
        on: {
            touchEnd: function(s,e) {
                let range = 5;
                let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                    - s.touches.startY
                if (diff < range || diff > -range) s.allowClick = true;
            }
        }
    });

    const propertySwiper = new Swiper('.models__property-slider', {
        thumbs: {
            swiper: listSwiper
        }
    });

    /* Закрашивание фона активного слайда */

    let activeThumb = models.querySelector('.swiper-slide-thumb-active');
    activeThumb.style.setProperty('--machine-color', activeThumb.dataset.background)

    propertySwiper.on('slideChangeTransitionStart', () => {
        activeThumb = models.querySelector('.swiper-slide-thumb-active');
        activeThumb.style.setProperty('--machine-color', activeThumb.dataset.background)
    });

    /* Анимация пунктирных линий активного слайда */

    let activeSlide = models.querySelector('.models__property-slider .swiper-slide-active');
    let masks = activeSlide.querySelectorAll('.mask');
    let circles = activeSlide.querySelectorAll('.circle');
    let descriptions = activeSlide.querySelectorAll('.models__property-content');
    let inlineCirclesArr = [];

    Array.from(circles).forEach((circle, i, self) => {
        const inlineCircles = Array.from(circle.querySelectorAll('circle'));
        inlineCircles.forEach(cir => inlineCirclesArr.push(cir))
    });

    let whiteCircles = inlineCirclesArr.filter((item, index) => index % 2 === 0);
    let redCircles = inlineCirclesArr.filter((item, index) => index % 2 === 1);

    const tl = gsap.timeline();
    tl.to(descriptions, {
        duration: 0.5,
        opacity: 1,
        x: '0'
    }).to(masks, {
        duration: 1,
        strokeDashoffset: 0,
        ease: "none"
    }, '=-0.3').to(whiteCircles, {
        duration: 0.5,
        r: 13,
    }).to(redCircles, {
        duration: 0.5,
        r: 5
    },'=-0.5');

    propertySwiper.on('slideChangeTransitionStart', () => {
        activeSlide = models.querySelector('.models__property-slider .swiper-slide-active');
        masks = activeSlide.querySelectorAll('.mask');
        let circles = activeSlide.querySelectorAll('.circle');
        let descriptions = activeSlide.querySelectorAll('.models__property-content');
        let inlineCirclesArr = [];

        Array.from(circles).forEach((circle, i, self) => {
            const inlineCircles = Array.from(circle.querySelectorAll('circle'));
            inlineCircles.forEach(cir => inlineCirclesArr.push(cir))
        });

        let whiteCircles = inlineCirclesArr.filter((item, index) => index % 2 === 0);
        let redCircles = inlineCirclesArr.filter((item, index) => index % 2 === 1);

        tl.to(descriptions, {
            delay: 0.1,
            duration: 0.5,
            opacity: 1,
            x: '0'
        }).to(masks, {
            duration: 1,
            strokeDashoffset: 0,
            ease: "none"
        }).to(whiteCircles, {
            duration: 0.5,
            r: 13,
        }).to(redCircles, {
            duration: 0.5,
            r: 5
        },'=-0.5')
    });
}