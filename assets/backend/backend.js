document.addEventListener('DOMContentLoaded', () => {
    handleForm();
});

function handleForm() {
    const forms = Array.from(document.querySelectorAll('.js-handle-form'));
    forms.forEach(form => {
        const url = form.action;
        const submitBtn = form.querySelector('.js-submit-form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitBtn.classList.add('disabled');

            const formData = new FormData(form);

            fetch(url, {
                body: formData,
                method: "POST"
            })
                .then(response => {
                    if (response.ok) {
                        window.openModal("success");
                        form.reset();
                    } else {
                        window.openModal("success");
                    }

                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    submitBtn.classList.remove('disabled');
                })
        })
    })
}