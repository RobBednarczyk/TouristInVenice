var map;
// create an empty storage array for all markers
var markers = [];
var infowindow = null;

var locations = [
    {
        name: "Ristorante al Bagolo",
        coordinates: {
            lat: 45.43979,
            lng: 12.327613
        },
        category: "Restaurant",
        favourite: false
    },
    {
        name: "La Patatina",
        coordinates: {
            lat: 45.439969,
            lng: 12.32785
        },
        category: "Restaurant",
        favourite: false
    },
    {
        name: "Osteria da Filo",
        coordinates: {
            lat: 45.439503,
            lng: 12.327801
        },
        category: "Bar",
        favourite: false
    },
    {
        name: "San Giacomo Venezia",
        coordinates: {
            lat: 45.440184,
            lng: 12.326146
        },
        category: "Lodging",
        favourite: false
    },
    {
        name: "Ostaria al Vecio Pozzo",
        coordinates: {
            lat: 45.439099,
            lng: 12.32369
        },
        category: "Restaurant",
        favourite: false
    },
    {
        name: "Ai nomboli",
        coordinates: {
            lat: 45.436406,
            lng: 12.328444
        },
        category: "Bar",
        favourite: false
    },
    {
        name: "Ca' Spezier",
        coordinates: {
            lat: 45.441115,
            lng: 12.328213
        },
        category: "Lodging",
        favourite: false
    },
    {
        name: "Frulala",
        coordinates: {
            lat: 45.442645,
            lng: 12.332353
        },
        category: "Bar",
        favourite: false
    },
    {
        name: "Casa Alessandra",
        coordinates: {
            lat: 45.445227,
            lng: 12.33284
        },
        category: "Lodging",
        favourite: false
    },
    {
        name: "Cantina Aziende Agricole",
        coordinates: {
            lat: 45.444736,
            lng: 12.328978
        },
        category: "Bar",
        favourite: false
    },
    {
        name: "La Zucca",
        coordinates: {
            lat: 45.440833,
            lng: 12.328539
        },
        category: "Restaurant",
        favourite: false
    }
];

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
                    "saturation": 100
                },
                {
                    //"color": "#ff704d"
                    "color": "#cc2900"
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
                    //"color": "#24282b"
                    "color": "#cccccc"
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


    // create markers from the locations data
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].coordinates;
        var name = locations[i].name;
        var category = locations[i].category;
        var marker = new google.maps.Marker({
            position: position,
            title: name,
            category: category,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // add the new marker to the marker list
        markers.push(marker);
        // connect an infowindow with a marker
        // create info window templates
        //var largeInfowindow = new google.maps.InfoWindow();
        marker.addListener("click", function() {
            populateInfoWindow(this);
        });
    }
}

var listModel = function(locations) {
    var self = this;

    this.highlightedMarker = null;

    this.categories = ["All", "Bar", "Lodging", "Restaurant"];

    this.locationsList = ko.observableArray(locations);

    this.showMarkerInfo = function(location) {
        var locIndex = locations.indexOf(location);
        var markerToBeShown = markers[locIndex];
        if (self.highlightedMarker && self.highlightedMarker !== markerToBeShown) {
            self.highlightedMarker.setAnimation(null);
        }

        if (markerToBeShown.getAnimation() === null) {
            markerToBeShown.setAnimation(google.maps.Animation.BOUNCE);
            self.highlightedMarker = markerToBeShown;
        }
        displayMarker(markerToBeShown);

    };
    // set current category to "all"
    this.currentCategory = ko.observable(this.categories[0]);

    this.changeCurrentCategory = function(category) {
        self.currentCategory(category);
    };

    this.changeLocationsList = function() {
        self.locationsList(locations);
        if (self.currentCategory() !== "All") {
            var filteredLocations = [];
            for (var i=0; i<self.locationsList().length; i++) {
                if (self.locationsList()[i].category === self.currentCategory()) {
                    filteredLocations.push(self.locationsList()[i]);
                }
            }
            self.locationsList(filteredLocations);
        }
    };

    // aply filter according to the chosen category
    this.applyFilter = function() {
        // change the displayed locations as well
        self.changeLocationsList();
        if (self.currentCategory() === "All") {
            showAllMarkers();
        } else {
            var filteredMarkers = filterMarkerArray(self.currentCategory());
            showFilteredMarkers(filteredMarkers);
        }
    };
};

// -------------------
// UTILITIES FUNCTIONS
// -------------------

function populateInfoWindow(marker) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (!infowindow) {
        infowindow = new google.maps.InfoWindow();
    }
    infowindow.marker = marker;
    infowindow.setContent("<div class='infoTitle'>" + marker.title + "</div>");
    infowindow.addListener("closeclick", function() {
        infowindow.marker = null;
        marker.setAnimation(null);
    });

    // add google street view photo
    var streetViewService = new google.maps.StreetViewService();
    var radius = 50;
    function getStreetView(data, status) {
      if (status == google.maps.StreetViewStatus.OK) {
        var nearStreetViewLocation = data.location.latLng;
        var heading = google.maps.geometry.spherical.computeHeading(
          nearStreetViewLocation, marker.position);
          //infowindow.setContent("<div class='infoTitle'>" + marker.title + "</div><div id='pano'></div>");
          var panoramaOptions = {
            position: nearStreetViewLocation,
            pov: {
              heading: heading,
              pitch: 30
            }
          };
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById("pano"), panoramaOptions);
      } else {
        infowindow.setContent("<div class='infoTitle'>" + marker.title + "</div>" +
          "<div>No Street View Found</div>");
      }
    }

    // add FOURSQUARE information
    var placeID;
    var address;
    var fourSquareUrl;
    var likes;

    // get the place id using a callback function in order to store the value in
    // a variable
    function getPlaceID(callback) {
        $.ajax({
            method: "GET",
            url: "https://api.foursquare.com/v2/venues/search",
            data: {
                ll: `${marker.position.lat()},${marker.position.lng()}`,
                client_id: "NB0O1WOUNUU2T3XLLQ4T15CZYY4GYLSCZAMRBGJ5JWLAYPOJ",
                client_secret: "FR12JPD10JJXUTEQYRQJMEF4L2K3CSBLZ0MISYJSVNYEPTPS",
                //radius: 10,
                v: "20170801"
            },
            success: function(data) {
                placeID = data.response.venues[0].id;
                callback(placeID);
            },
            error: function() {
                alert("Cannot read data from foursquare");
            }
        });
    }

    // store the place ID in order to send another AJAX request
    function storePlaceID(idFromFourSquare) {
        placeID = idFromFourSquare;

        // nested AJAX request:
        function getDetails(callback, placeID) {

            $.ajax({
                method: "GET",
                url: "https://api.foursquare.com/v2/venues/" + placeID,
                data: {
                    client_id: "NB0O1WOUNUU2T3XLLQ4T15CZYY4GYLSCZAMRBGJ5JWLAYPOJ",
                    client_secret: "FR12JPD10JJXUTEQYRQJMEF4L2K3CSBLZ0MISYJSVNYEPTPS",
                    v: "20170801"
                },
                success: function(data) {
                    var fullAddress = data.response.venue.location.formattedAddress[0];
                    var fourSquareUrl = data.response.venue.canonicalUrl;
                    var userLikes = data.response.venue.likes.count;
                    var placeID = placeID;

                    callback(fullAddress, fourSquareUrl, userLikes, placeID);
                },
                error: function() {
                    alert("Cannot read data from foursquare");
                }
            });
        }

        function storeDetailInfo(fullAddress, fourSquareUrl, userLikes) {
            let address = fullAddress;
            let url = fourSquareUrl;
            let likes = userLikes;
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
            infowindow.setContent("<div class='infoTitle'>" +
                marker.title +
                "</div><div id='pano'></div>" +
                "<div class='infoFour'>Foursquare info:" +
                "<div>Address: " + address +"</div>" +
                "<div>Foursquare url: " + "<a href=" + "'" + url + "'" + "target=_blank" + ">" +
                 url + "</a>" +"</div>" +
                "<div>User likes: " + likes + "</div>" +
                "</div>");
        }


        getDetails(storeDetailInfo, placeID);
    }

    getPlaceID(storePlaceID);

    infowindow.open(map, marker);
}

function displayMarker(marker) {
    marker.setMap(map);
    populateInfoWindow(marker);
}

function showFilteredMarkers(filteredMarkers) {
    // Extend the boundaries of the map for each marker and display the marker
    var bounds = new google.maps.LatLngBounds();
    // clear the previous filter result
    hideMarkers();

    for (var i = 0; i < filteredMarkers.length; i++) {
      filteredMarkers[i].setMap(map);
      bounds.extend(filteredMarkers[i].position);
    }
    map.fitBounds(bounds);
 }


// This function will loop through the markers array and display them all.
function showAllMarkers() {
  var bounds = new google.maps.LatLngBounds();
  // Extend the boundaries of the map for each marker and display the marker
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
function hideMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

function filterMarkerArray(category) {
    var filteredMarkers = [];
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].category === category) {
            filteredMarkers.push(markers[i])
        }
    }
    return filteredMarkers;
}

document.getElementById("showMarkers").addEventListener('click', showAllMarkers);

document.getElementById("hideMarkers").addEventListener('click', hideMarkers);


ko.applyBindings(new listModel(locations));
