export default function header() {
    const header = document.querySelector('.header');
    const intro = document.querySelector('.intro');
    intro.style.setProperty('--header-height', header.clientHeight + 'px');
}