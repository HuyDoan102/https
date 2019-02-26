var map;

function initMap() {
    var location = {lat: 16.0412644, lng: 108.2094781};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: location
    });

    var stores = document.getElementById("map").getAttribute("stores");

    var markers = JSON.parse(stores);

    Array.prototype.forEach.call(markers, function(markerElement) {
        var lat = parseFloat(markerElement.lat);
        var lng = parseFloat(markerElement.lng);
        var name = markerElement.name;
        var email = markerElement.email;
        var phone = markerElement.phone;
        var address = markerElement.address;

        location = new google.maps.LatLng(
            lat, lng
        );

        var infoWindow = new google.maps.InfoWindow();
        var icon = {
            url: "/images/store.png", // url
            scaledSize: new google.maps.Size(20, 25), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: icon,
            animation: google.maps.Animation.BOUNCE
        });

        var contentString = '<p><b>' + name + '</b></p>'
            + '<p>Email: ' + email + '</p>'
            + '<p>Phone: ' + phone + '</p>'
            + '<p>Address: ' + address + '</p>';


        marker.addListener('click', function() {
            infoWindow.setContent(contentString);
            infoWindow.open(map, marker);
        });

    });
}
