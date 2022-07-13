export default function error() {
    const header = document.querySelector('.header');
    const error = document.querySelector('.error')
    if (!error) return;

    error.style.setProperty('--header-height', header.clientHeight + 'px');
}

