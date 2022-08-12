import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function features() {
    if (!matchMedia('(min-width: 640px)').matches) {
        const titles = document.querySelectorAll('.features__item-title');

        window.addEventListener('scroll', (e) => {
            titles.forEach(title => {
                const positionTop = title.getBoundingClientRect().top;
                const containerHeight = title.closest('.features__item').clientHeight;
                const windowHeight = document.documentElement.clientHeight;
                const startTrigger = windowHeight / 100 * 75;
                const endTrigger = startTrigger - containerHeight;

                if (positionTop < startTrigger && positionTop > endTrigger) {
                    title.classList.add('features__item-title--red');
                } else {
                    title.classList.remove('features__item-title--red')
                }
            })
        })
    } else {
        const features = Array.from(document.querySelectorAll('.features__item'));

        gsap.utils.toArray('.features__img').forEach((elem, index) => {
            gsap.set(elem, {
                opacity: 0,
            })

            const currentItem = features[index];
            const currentItemImg = currentItem.querySelector('.features__img');
            const currentItemTitle = currentItem.querySelector('.features__item-title');
            const previousItem = features[index - 1];


            gsap.to(elem, {
                opacity: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 40%',
                    end: 'top 40%',
                    onEnter: () => {
                        if (previousItem) {
                            const previousItemImg = previousItem.querySelector('.features__img');
                            const previousItemTitle = previousItem.querySelector('.features__item-title');

                            gsap.to(previousItemImg, {opacity: 0})
                            previousItemTitle.classList.remove('features__item-title--red');
                        }

                        gsap.to(currentItemImg, {opacity: 1})
                        currentItemTitle.classList.add('features__item-title--red');
                    },
                    onEnterBack: () => {
                        if (previousItem) {
                            const previousItemImg = previousItem.querySelector('.features__img');
                            const previousItemTitle = previousItem.querySelector('.features__item-title');

                            gsap.to(currentItemImg, {opacity: 0})
                            gsap.to(previousItemImg, {opacity: 1})
                            previousItemTitle.classList.add('features__item-title--red');
                            currentItemTitle.classList.remove('features__item-title--red');
                        }


                    },
                },
            })
        })
    }
}
