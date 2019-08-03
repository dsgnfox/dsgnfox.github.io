ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [60.761655, 46.303040],
            zoom: 17,
            controls: ['zoomControl']
        }),
        myPlacemark = new ymaps.Placemark([60.761655, 46.303040], {
            balloonContentHeader: "",
            balloonContentBody: "<img src='./img/office.jpg'>",
            balloonContentFooter: "Время работы офиса<br>08:00 — 19:00 Без выходных",
            hintContent: "Офис Терабит"
        })
    
    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}