function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 44.7622525, lng: 20.4796306};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Vozdovac, Belgrade, Serbia' // Title Location
    });
}