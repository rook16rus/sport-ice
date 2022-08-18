export default function modelTag() {
    const tag = document.querySelector('.model-card__title-tag')
    if (!tag) return;

    if (!tag.innerHTML) tag.style.display = 'none';
}