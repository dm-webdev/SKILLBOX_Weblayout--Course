ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
      center: [55.757792252269944,37.60049188507652],
      zoom: 15,
      controls: [],
    }),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Шоурум №2. Покровский бульвар, дом 24, строение 3",
        balloonContent: "Шоурум №2. Покровский бульвар, дом 24, строение 3",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "/pictures/contacts/map.svg",
        iconImageSize: [20, 20],
      }
    );
  myMap.geoObjects.add(myPlacemark);
});