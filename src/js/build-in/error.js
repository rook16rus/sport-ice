export default function error() {
    const header = document.querySelector('.header');
    const error = document.querySelector('.error')

    error.style.setProperty('--header-height', header.clientHeight + 'px');
}