/* eslint-disable no-undef */
const mapInit = () => {
  ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
      center: [59.939666, 30.323711],
      zoom: 16,
    }, {
      searchControlProvider: 'yandex#search',
    });

    let myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: 'Собственный значок метки',
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/marker.png',
      iconImageSize: [18, 22],
      iconImageOffset: [-5, -38],
    });

    myMap.geoObjects.add(myPlacemark);
  });
};

export {mapInit};
