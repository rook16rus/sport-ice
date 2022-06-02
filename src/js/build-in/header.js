export default function header() {
    const header = document.querySelector('.header');
    const intro = document.querySelector('.intro');
    intro.style.setProperty('--header-height', header.clientHeight + 'px');
    intro.style.setProperty('--machine-color', 'linear-gradient(180deg, #1D1D1D 0%, #2C2C2C 100%), linear-gradient(180deg, #940D06 0%, #C6180F 100%)')
}