// Яндекс карта
ymaps.ready(init);
function init(){
	var myMap = new ymaps.Map("map", {
    center: [48.753890, 44.484555],
    zoom: 16
  });

	// Метка на карте
	var myPlacemark = new ymaps.Placemark([48.753890, 44.484555], {}, {
		preset: 'islands#orangeIcon',
		iconImageSize: [30, 40],
		iconImageOffset: [0, -2]
	});

	myMap.geoObjects.add(myPlacemark); 
}