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

    const burger = document.querySelector('.header__burger');
    const mobileNavigation = document.querySelector('.header__mobile')

    burger.addEventListener('click', function (e) {
        e.currentTarget.classList.toggle('active');
        mobileNavigation.classList.toggle('active');
        header.classList.toggle('active');
    })
}