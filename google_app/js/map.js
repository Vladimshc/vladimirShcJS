var geocoder;
var map;

$(document).ready(function () {
   navigator.geolocation.getCurrentPosition(initialize);
});

function initialize(location) {
    geocoder = new google.maps.Geocoder();
    var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
    var mapOptions = {
        center: currentLocation,
        zoom: 14
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: currentLocation
    });
}

function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });

            var pointPosition = marker.position.toLocaleString().split(',');
            $("#position-longitude").text(pointPosition[0].substring(1));
            $("#position-latitude").text(pointPosition[1].substring(0, pointPosition[1].length - 1));

        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

