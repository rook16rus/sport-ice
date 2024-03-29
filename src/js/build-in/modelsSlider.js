import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";
import gsap from 'gsap';
import modals from "./modals";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function modelsSlider() {
    const models = document.querySelector('.models');
    if (!models) return;

    /* Инициализация слайдеров */

    const listSwiper = new Swiper('.models__list-slider', {
        spaceBetween: 10,
        slidesPerView: "auto",
        breakpoints: {
            640: {
                slidesPerView: "auto",
                direction: "vertical",
                spaceBetween: 40,
                allowTouchMove: false,
            }
        }
    });

    const propertySwiper = new Swiper('.models__property-slider', {
        spaceBetween: 10,
        thumbs: {
            swiper: listSwiper
        }
    });

    /* Закрашивание фона активного слайда */

    let activeThumb = models.querySelector('.swiper-slide-thumb-active');
    activeThumb.style.setProperty('--machine-color', activeThumb.dataset.background);

    propertySwiper.on('slideChangeTransitionStart', () => {
        activeThumb = models.querySelector('.swiper-slide-thumb-active');
        activeThumb.style.setProperty('--machine-color', activeThumb.dataset.background)

        if (matchMedia('(max-width: 640px)').matches) listSwiper.slideTo(propertySwiper.activeIndex);
    });

    /* Анимация пунктирных линий активного слайда */

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > (entry.target.hasAttribute('data-intersection-ratio') ? Number(entry.target.getAttribute('data-intersection-ratio')) : 0.5)) {
                lineAnimationInit( models, 0.2);
            }
        });
    },{threshold: [0, 0.25, 0.5, 0.75, 1]});

    observer.observe(models);

    propertySwiper.on('slideChangeTransitionStart', () => {
        lineAnimationInit( models, 0.3);
    });
}

function lineAnimationInit( section, delay = 0) {
    const tl = gsap.timeline();
    let activeSlide = section.querySelector('.models__property-slider .swiper-slide-active');
    let masks = activeSlide.querySelectorAll('.mask');
    let circles = activeSlide.querySelectorAll('.circle');
    let descriptions = activeSlide.querySelectorAll('.models__property-content');
    let inlineCirclesArr = [];

    Array.from(circles).forEach((circle) => {
        const inlineCircles = Array.from(circle.querySelectorAll('circle'));
        inlineCircles.forEach(cir => inlineCirclesArr.push(cir))
    });

    let whiteCircles = inlineCirclesArr.filter((item, index) => index % 2 === 0);
    let redCircles = inlineCirclesArr.filter((item, index) => index % 2 === 1);

    tl.to(descriptions, {
        delay: delay,
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
}