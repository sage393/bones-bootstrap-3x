// #############################################################################
// -----------------------------------------------------------------------------
// Google Maps
// -----------------------------------------------------------------------------

function initialize_maps() {

    var MY_MAPTYPE_ID = 'Theme';

    var featureOpts = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            hue: '#006eff'
        }, {
            saturation: -100
        }]
    }];

    var styledMapOptions = {
        name: 'Theme Style'
    };

    var mapOptions = {
        zoom: 18,
        scrollwheel: false,
        center: new google.maps.LatLng(13.6901597,-89.2560366,17),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
        mapTypeId: MY_MAPTYPE_ID
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);


    // var URLactual = window.location.host;
    // var image = "http://" + URLactual + "/wp-content/themes/*theme*/library/images/google-maps-pin.png";
    var myLatLng = new google.maps.LatLng(13.6901597,-89.2560366,17);
    var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map
            // icon: image
        });
}

google.maps.event.addDomListener(window, 'load', initialize_maps);

initialize_maps();

// #############################################################################
