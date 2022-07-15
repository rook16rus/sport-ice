export default function equipmentsList() {
    const button = document.querySelector('.model-info__equipment-more-button');
    if (!button) return;

    button.addEventListener('click', () => {
        const equipments = document.querySelectorAll('.model-info__equipment-item:nth-child(n + 5)');

        equipments.forEach(item => {
            item.style.opacity = 0.6;
            item.style.visibility = 'visible';
            item.style.display = 'flex'
        });

        button.remove();
    })
}