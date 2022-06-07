export default function yandexMap() {
    ymaps.ready(init);

    function init() {
        const map = new ymaps.Map('contact-map', {
            center: [55.7553728204915,49.225575677909866],
            zoom: 17
        })

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('rulerControl'); // удаляем контрол правил

        addMarker([55.7553728204915, 49.225575677909866], map);
    }

    function addMarker(coords, map) {
        const marker = new ymaps.Placemark(coords, {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/placemarker.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40]
        })

        map.geoObjects.add(marker);
    }
}