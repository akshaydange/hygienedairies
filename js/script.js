function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Hygiene Dairy Farm, Nashik, IN', 20.033537, 74.230772],
        ['Marketing Office, Nashik, IN', 19.993104, 73.823392],
		['Upnagar Shop, Nashik, IN', 19.970901, 73.819407],
		['Ashoka Marg Shop, Nashik, IN', 19.980214, 73.800453],
		['Govind Nagar Shop, Nashik, IN', 19.982690, 73.775290],
		['Gangapur Road Shop, Nashik, IN', 20.012137, 73.760640]
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Hygiene Dairy Farm</h3>' +
        '<p>Plot-162/163, Vil-Dhanore, Niphad, Nashik</p>' + '</div>'],
		
		['<div class="info_content">' +
        '<h3>Marketing Office</h3>' +
        '<p>S. No. 367/2, New Aurangbad Road,<br>Near Godavari Lawns, Pawar Mala,<br>Tapovan, Nashik-3</p>' + '</div>'],
		
		['<div class="info_content">' +
        '<h3>Upnagar Shop</h3>' +
        '<p>Shop No-2, Guruashray Soc.,<br>Matoshri Nagar, Upnagar,<br>Nashik-6</p>' + '</div>'],
		
		['<div class="info_content">' +
        '<h3>Ashoka Marg Shop</h3>' +
        '<p>Shop No-6, Amol Vihar Appt,<br>Street No-3, Kalptaru Nagar,<br>Ashoka Marg, Nashik.</p>' + '</div>'],
		
        ['<div class="info_content">' +
        '<h3>Govind Nagar Shop</h3>' +
        '<p>Shop No-1, Shubhalaxmi Apt. B,<br>Near Sadguru Nagar,<br>City Center to Govind Nagar<br>Link Road, Nashik</p>' + '</div>'],
		
        ['<div class="info_content">' +
        '<h3>Gangapur Road Shop</h3>' +
        '<p>Shop No. 3, Sadguru Apt,<br>Prasad Circle, S.T Colony,<br>Gangapur Road, Nashik-13</p>' + '</div>']
    ];
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(15);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);