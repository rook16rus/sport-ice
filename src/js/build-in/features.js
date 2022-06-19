export default function features() {
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
    });
}