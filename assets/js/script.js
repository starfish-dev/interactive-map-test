$(document).ready(function() {

    var map = L.map('mapid', {
        center: [40.7020, -74.18],
        zoom: 12,
    });

    var imageUrl = './assets/img/philippines.svg';
    var imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];

    L.imageOverlay(imageUrl, imageBounds, {
        
    }).addTo(map);

    var marker = L.marker([40.721665, -74.183802]).addTo(map);

    var card = "<img src='./assets/img/philippine-map.png' class='leaflet--image'><b>This is the Philippines</b><br>Mabuhay, kumusta?";

    marker.bindPopup(card).openPopup();

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    // var mymap = L.map('mapid').setView([12.8797, 121.7740], 5);

    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     id: 'mapbox/streets-v11',
    //     accessToken: 'pk.eyJ1IjoidW50YWxhbmxlbSIsImEiOiJjazYwY2czeWIwNm9qM2xwNHIzNzQzYWFnIn0.8uivTb-Vt-IpiSnfArbtlw',
    // })
    // .addTo(mymap);

});