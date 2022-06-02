export default function fixedBlock() {
    const layout = document.querySelector('.js-fixed-layout');
    const container = document.querySelector('.js-fixed-container');
    const element = document.querySelector('.js-fixed-element');

    if (!layout) return;

    coordsCheck(element, container, layout);

    window.addEventListener('scroll', () => {
        coordsCheck(element, container, layout);
    })
}

function coordsCheck(element, container, layout) {
    if (layout.getBoundingClientRect().top <= 100) {
        element.style.position = 'fixed';
        element.style.top = 100 + 'px'
        element.style.bottom = 'auto';
        element.style.width = container.clientWidth + 'px';
    } else {
        element.style.position = 'static';
        element.style.width = 'auto';
    }

    if (Math.round(layout.getBoundingClientRect().bottom) <= Math.round(element.getBoundingClientRect().bottom)) {
        element.style.position = 'absolute';
        element.style.bottom = 0 + 'px';
        element.style.top = 'auto';
    }
}