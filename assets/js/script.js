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

    marker.bindPopup(card).closePopup();

    marker.on('mouseover',function(ev) {
        marker.openPopup();
    });
    marker.on('mouseleave', function(){
        setTimeout(
            function(){
                // marker.closePopup();
                console.log('hello')
            }, 2000);
    });

    // to check the longlat in the map

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

});