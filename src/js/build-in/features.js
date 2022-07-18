import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function features() {
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
        .to(".features__item:not(:first-child)", {
            yPercent: 0,
            stagger: 4,
            opacity: 1,
            duration: 2,
            ease: "none",
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
