// *
// * Add multiple markers
// * 2013 - en.marnoto.com
// *

// necessary variables
var map;
var infoWindow;

// markersData variable stores the information necessary to each marker
var markersData = [
   {
      lat: -22.404092, 
      lng: -47.563966,
      name: "Igreja Evangélica Luterana de Rio Claro",
      address1:"Rua Cinco, 1820 - Centro",
      address2: "Rio Claro-SP",
      postalCode: "Fone (19) 8877-3322",
      ico:"images/church-ico.svg" // don't insert comma in the last item of each marker
   },
   {
      lat: -22.400093, 
      lng: -47.548912,
      name: "Tut's Buffet",
      address1:"Avenida 18 A, 789 - Bela Vista",
      address2: "Rio Claro-SP",
      postalCode: "Fone (19) 8877-3322",
      ico:"images/party-ico.svg" // don't insert comma in the last item of each marker
   },
   {
      lat: -22.412218, 
      lng: -47.567828,
      name: "Central Park Hotel",
      address1:"Avenida 1, 1030 - Centro",
      address2: "Rio Claro-SP",
      postalCode: "Fone (19) 3522-4224",
      ico: "images/hotels-ico.svg" // don't insert comma in the last item of each marker
   },
   {
      lat: -22.413923, 
      lng: -47.571477,
      name: "Hotel Cristal",
      address1:"Av. Pres. Tancredo de Almeida Neve, 1440 - Jd Claret",
      address2: "Rio Claro-SP",
      postalCode: "Fone (19) 3533-3155",
      ico: "images/hotels-ico.svg" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item // don't insert comma in the last item
   {
      lat: -22.357747, 
      lng: -47.549970,
      name: "Splendore Motel",
      address1:"Av. Brasil, 4240 - Distrito Industrial",
      address2: "Rio Claro-SP",
      postalCode: "Fone (19) 3527-4034",
      ico: "images/hotels-ico.svg" // don't insert comma in the last item of each marker
   } // don't insert comma in the last item // don't insert comma in the last item
];


function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(-22.414891, -47.565120),
      zoom: 9,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}

google.maps.event.addDomListener(window, 'load', initialize);


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var postalCode = markersData[i].postalCode;
      var ico = markersData[i].ico;

      createMarker(latlng, name, address1, address2, postalCode, ico);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, address1, address2, postalCode, ico){
   var marker = new google.maps.Marker({
       map: map,
       position: latlng,
       title: name,
       icon: ico,
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         postalCode + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}