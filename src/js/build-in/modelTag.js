export default function modelTag() {
    const tags = document.querySelectorAll('.js-model-tag');

    tags.forEach(tag => {
        if (!tag.innerHTML) tag.style.display = 'none';
    })
}