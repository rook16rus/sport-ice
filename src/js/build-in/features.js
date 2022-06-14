export default function features() {
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > (entry.target.hasAttribute('data-intersection-ratio') ? Number(entry.target.getAttribute('data-intersection-ratio')) : 0.5)) {
                entry.target.classList.add('features__item-title--red');
            } else if(entry.target.classList.contains('features__item-title--red')) {
                entry.target.classList.remove('features__item-title--red')
            }
        });
    },{threshold: [0, 0.25, 0.5, 0.75, 1]});

    const titles = Array.from(document.querySelectorAll('.features__item-title'));

    titles.forEach(title => observer.observe(title));
}