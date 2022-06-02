import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";
import gsap from 'gsap';

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function introSlider() {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    const textSwiper = new Swiper('.intro__text-slider', {
        direction: "vertical",
        slidesPerView: "auto",
        on: {
            touchEnd: function(s,e) {
                let range = 5;
                let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                    - s.touches.startY
                if (diff < range || diff > -range) s.allowClick = true;
            }
        }
    })

    const imgSwiper = new Swiper('.intro__img-slider', {
        thumbs: {
            swiper: textSwiper
        },
        navigation: {
            nextEl: intro.querySelector('.js-next-slide'),
            prevEl: intro.querySelector('.js-prev-slide'),
        },
        pagination: {
            el: intro.querySelector('.js-intro-pagination'),
            type: "fraction",
            currentClass: "intro__pagination-number-current",
            totalClass: "intro__pagination-number-total",
            renderFraction: function (currentClass, totalClass) {
                return '<span class="intro__pagination-number ' + currentClass + '"></span><div class="intro__pagination-line"><div class="intro__pagination-line-progress"></div></div><span class="intro__pagination-number ' + totalClass + '"></span>';
            },
            formatFractionCurrent: (number) => '0' + number,
            formatFractionTotal: (number) => '0' + number,
        }
    })

    let activeSlide = intro.querySelector('.intro__img-slider .swiper-slide-active');
    console.log(activeSlide);
    intro.style.setProperty('--machine-color', activeSlide.dataset.background);

    let tl = gsap.timeline();

    imgSwiper.on('slideChangeTransitionStart', () => {
        initLineAnimation(tl, imgSwiper);

        activeSlide = intro.querySelector('.intro__img-slider .swiper-slide-active');
        console.log(activeSlide.dataset.background);
        intro.style.setProperty('--machine-color', activeSlide.dataset.background)
    })

    initLineAnimation(tl, imgSwiper);
}

function initLineAnimation(tl, slider) {
    tl.restart();
    tl.clear();
    const progress = document.querySelector('.intro__pagination-line-progress');
    tl.to(progress, {
        width: '100%',
        duration: 5,
        onComplete: () => {
            if (slider.activeIndex === slider.slides.length - 1) {
                slider.slideTo(0)
            } else {
                slider.slideNext()
            }
        }, clearProps: "all"})
}