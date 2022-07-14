export default function inputPlaceholder() {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach(input => {
        const label = input.nextElementSibling;

        input.addEventListener('blur', () => {
            const value = input.value;

            value ? label.classList.add('active') : label.classList.remove('active');
        })
    })
}