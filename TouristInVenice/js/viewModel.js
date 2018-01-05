var map;
var markers = [];
// var ListViewModel = function() {
// };

// load map
function initMap() {
    //alert("The script was loaded");
    var styles = [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": "100"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#ff704d"
                },
                {
                    "lightness": 40
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#00000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#7f8d89"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7f8d89"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#2b3638"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2b3638"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#24282b"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#24282b"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ];
    // end of map styles
    var mapElement = document.getElementsByClassName("map")[0];
    map = new google.maps.Map(mapElement, {
        center: {lat: 45.438574, lng: 12.32636 },
        styles: styles,
        zoom: 15,
    });
    var locations = [
        {
            name: "Ristorante al Bagolo",
            coordinates: {
                lat: 45.43979,
                lng: 12.327613
            },
            category: "restaurant",
            favourite: false
        },
        {
            name: "La Patatina",
            coordinates: {
                lat: 45.439969,
                lng: 12.32785
            },
            category: "restaurant",
            favourite: false
        },
        {
            name: "Osteria da Filo",
            coordinates: {
                lat: 45.439503,
                lng: 12.327801
            },
            category: "bar",
            favourite: false
        },
        {
            name: "San Giacomo Venezia",
            coordinates: {
                lat: 45.440184,
                lng: 12.326146
            },
            category: "lodging",
            favourite: false
        },
        {
            name: "Ostaria al Vecio Pozzo",
            coordinates: {
                lat: 45.439099,
                lng: 12.32369
            },
            category: "restaurant",
            favourite: false
        },
        {
            name: "Ai nomboli",
            coordinates: {
                lat: 45.436406,
                lng: 12.328444
            },
            category: "bar",
            favourite: false
        },
        {
            name: "Ca' Spezier",
            coordinates: {
                lat: 45.441115,
                lng: 12.328213
            },
            category: "lodging",
            favourite: false
        },
        {
            name: "Frulala",
            coordinates: {
                lat: 45.442645,
                lng: 12.332353
            },
            category: "bar",
            favourite: false
        },
        {
            name: "Casa Alessandra",
            coordinates: {
                lat: 45.445227,
                lng: 12.33284
            },
            category: "lodging",
            favourite: false
        },
        {
            name: "Cantina Aziende Agricole",
            coordinates: {
                lat: 45.444736,
                lng: 12.328978
            },
            category: "bar",
            favourite: false
        },
    ];
    // create info window templates
    var largeInfowindow = new google.maps.InfoWindow();
    // create markers from the data
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].coordinates;
        var name = locations[i].name;
        var marker = new google.maps.Marker({
            position: position,
            title: name,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // add the new marker to the marker list
        markers.push(marker);
        // connect an infowindow with a marker
        marker.addListener("click", function() {
            populateInfoWindow(this, largeInfowindow);
        });
    }
}


// create two marker templates
// var defaultIcon = makeMarkerIcon('0091ff');
// var highlightedIcon = makeMarkerIcon('FFFF24');

function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    // Clear the infowindow content to give the streetview time to load.
    //infowindow.setContent('');
    infowindow.marker = marker;
    infowindow.setContent("<div>" + marker.title + "</div>");
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
    });
  }
  // Open the infowindow on the correct marker.
  infowindow.open(map, marker);
}

// create a function for making different marker styles
// function makeMarkerIcon(markerColor) {
//   var markerImage = new google.maps.MarkerImage(
//     'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
//     '|40|_|%E2%80%A2',
//     new google.maps.Size(21, 34),
//     new google.maps.Point(0, 0),
//     new google.maps.Point(10, 34),
//     new google.maps.Size(21,34));
//   return markerImage;
// }


// This function will loop through the markers array and display them all.
function showListings() {
  var bounds = new google.maps.LatLngBounds();
  // Extend the boundaries of the map for each marker and display the marker
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
function hideMarkers(markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

document.getElementById("showMarkers").addEventListener('click', showListings);

document.getElementById("hideMarkers").addEventListener('click', function() {
  hideMarkers(markers);
});

// ko.applyBindings(new ListViewModel());
