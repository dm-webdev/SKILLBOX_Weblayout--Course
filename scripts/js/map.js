window.addEventListener("scroll", mapInit);

function mapInit() {
  let target = document.querySelector("#map");
  if (target.getBoundingClientRect().top - window.innerHeight < 200) {
    window.removeEventListener("scroll", mapInit);
    let elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.src =
      "https://api-maps.yandex.ru/2.1/?apikey=8941aad9-b29c-4f71-be96-d498cf86e841&lang=ru_RU&onload=getYaMap";
    document.getElementsByTagName("body")[0].appendChild(elem);
  }
}

function getYaMap() {
  var myMap = new ymaps.Map("map", {
    center: [55.757792252269944, 37.60049188507652],
    zoom: 15,
    controls: [],
  });

  let myPlacemark = new ymaps.Placemark(
    myMap.getCenter(),
    {
      hintContent: "Шоурум №2. Покровский бульвар, дом 24, строение 3",
      balloonContent: "Шоурум №2. Покровский бульвар, дом 24, строение 3",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "/course/pictures/contacts/map.svg",
      iconImageSize: [20, 20],
    }
  );
  myMap.geoObjects.add(myPlacemark);

  if (window.innerWidth < 1224) {
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');
  }

}
