import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function initSliders() {
    const sliders = Array.from(document.querySelectorAll('.js-init-slider'));
    sliders.forEach((slider, i) => {
        const fadeEffect = slider.dataset.fade ? {effect: 'fade', fadeEffect: {crossFade: true}} : {};
        const autoplay = slider.dataset.delay ? {
            autoplay: {
                delay: Number(slider.dataset.delay),
                disableOnInteraction: true
            }
        } : {};
        const slidesPerView = slider.dataset.slides ? Number(slider.dataset.slides) || 'auto' : 1;
        const spaceBetween = slider.dataset.space ? Number(slider.dataset.space) : 0;
        const loop = !!slider.dataset.loop;
        const hashNavigation = !!slider.dataset.hash;
        const allowTouchMove = !slider.dataset.noTouch;
        const watchOverflow = !!slider.dataset.watchOverflow;
        const slidesPerColumn = Number(slider.dataset.column);
        let freeMode = slider.dataset.freeMode;

        let gridColumn;

        if (slidesPerColumn) {
            gridColumn = {
                rows: slidesPerColumn,
                fill: "row"
            }
        }

        let navigation = slider.querySelector('.js-slider-navigation');
        if (navigation) {
            navigation = {
                navigation: {
                    nextEl: navigation.querySelector('.js-next-slide'),
                    prevEl: navigation.querySelector('.js-prev-slide'),
                }
            }
        } else {
            const navigationContainer = slider.closest('.js-init-slider-container');
            if (navigationContainer) {
                navigation = {
                    navigation: {
                        nextEl: navigationContainer.querySelector('.js-next-slide'),
                        prevEl: navigationContainer.querySelector('.js-prev-slide'),
                    }
                }
            }
        }

        if(freeMode) {
            freeMode = {
                enabled: true,
                sticky: false,
            }
        }

        let breakpointsSpacebetween = slider.dataset.spaces;
        if (breakpointsSpacebetween) {
            const widths = breakpointsSpacebetween.match(/[0-9]{3,4}:/g).map(i => i.slice(0, -1));
            const spaces = breakpointsSpacebetween.match(/:[0-9]{1,2}/g).map(i => i.slice(1));

            breakpointsSpacebetween =
                {
                    breakpoints: {}
                }

            for (let i = 0; i < widths.length; i++) {
                const width = Number(widths[i])
                const space = Number(spaces[i])

                breakpointsSpacebetween.breakpoints[width] = {
                    spaceBetween: space,
                };
            }
        }

        let breakpointsPerview = slider.dataset.slidesBreakpoints;
        if (breakpointsPerview) {
            const widths = breakpointsPerview.match(/[0-9]{3,4}:/g).map(i => i.slice(0, -1));
            const spaces = breakpointsPerview.match(/:[0-9\.]+/g).map(i => i.slice(1));

            breakpointsPerview =
                {
                    breakpoints: {}
                }

            for (let i = 0; i < widths.length; i++) {
                const width = Number(widths[i])
                const slide = Number(spaces[i])

                breakpointsPerview.breakpoints[width] = {
                    slidesPerView: slide,
                };
            }
        }

        const swiper = new Swiper(slider, {
            slidesPerView,
            grid: gridColumn,
            spaceBetween,
            freeMode,
            ...navigation,
            hashNavigation,
            allowTouchMove,
            disableOnInteraction: true,
            ...autoplay,
            loop,
            watchOverflow,
            ...fadeEffect,
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
                bulletElement: 'button',
                bulletClass: 'slider-bullet',
                bulletActiveClass: 'slider-bullet--active',
            },
            ...breakpointsSpacebetween,
            ...breakpointsPerview,
        })
    })

}