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
        return;
    }

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".features .container",
            scrub: true,
            pin: ".features .container",
            start: "top 20%",
        }
    });


    gsap.utils.toArray(".features__item:not(:first-child)").forEach(item => {
        gsap.set(item, {
            yPercent: 100,
            opacity: 0
        })
    });

    timeline
        .fromTo(".features__item:not(:first-child)", {color: '#B0B1B3'}, {
            yPercent: 0,
            stagger: 4,
            opacity: 1,
            duration: 2,
            ease: "none",
            color: '#A6120A'
        })
        .to(".features__item:first-child", {
            opacity: 0,
            duration: 2
        }, "-=2")
        .to(".features__item:nth-child(2)", {
            opacity: 0,
            duration: 2,
        })
}
