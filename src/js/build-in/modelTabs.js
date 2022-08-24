export default function modelTabs() {
    const tabsContainer = document.querySelector('.model-info__tabs');
    const tabs = document.querySelectorAll('.model-info__tab');
    const contents = document.querySelectorAll('.model-info__tabs-content')

    if (!tabsContainer) return;

    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('model-info__tab')) {
            tabActivate(e.target.dataset.href);
        }
    })

    function tabActivate(id) {
        tabs.forEach((tab) => {
            if (tab.dataset.href === id) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        const content = document.querySelector(`.model-info__tabs-content[data-id="${id}"]`);

        contents.forEach(tabContent => {
            if (tabContent === content) {
                tabContent.classList.add('active')
            } else {
                tabContent.classList.remove('active')
            }
        })
    }
}

