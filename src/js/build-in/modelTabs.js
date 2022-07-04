export default function modelTabs() {
    const tabsContainer = document.querySelector('.model-info__tabs');
    const tabs = document.querySelectorAll('.model-info__tab');
    const contents = document.querySelectorAll('.model-info__tabs-content')
    let hash = document.location.hash;

    if (!tabsContainer) return;

    if (hash) {
        hash = hash.slice(1);
        tabActivate(hash);
    } else {
        tabActivate(tabs[0].hash.slice(1));
    }

    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('model-info__tab')) {
            tabActivate(e.target.hash.slice(1));
        }
    })

    function tabActivate(hash) {
        tabs.forEach((tab) => {
            if (tab.hash.slice(1) === hash) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        const content = document.querySelector('.model-info__tabs-content--' + hash);

        contents.forEach(tabContent => {
            if (tabContent === content) {
                tabContent.classList.add('active')
            } else {
                tabContent.classList.remove('active')
            }
        })

        document.location.hash = '#' + hash;
    }
}

