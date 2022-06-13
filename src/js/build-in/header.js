export default function header() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (header.getBoundingClientRect().top > document.documentElement.getBoundingClientRect().top) {
            if (header.classList.contains('header--whiter')) return;
            header.classList.add('header--white');
        } else {
            header.classList.remove('header--white');
        }
    });

    const intro = document.querySelector('.intro');
    if (!intro) return;

    intro.style.setProperty('--header-height', header.clientHeight + 'px');
}