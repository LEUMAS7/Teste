function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: -24.561410, lng: -54.050766}
  });

  var image = 'https://icon-icons.com/icons2/317/PNG/32/house-icon_34406.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -24.561410, lng: -54.050766},
    map: map,
    icon: image
  }); 
  var image = 'https://icon-icons.com/icons2/317/PNG/32/house-icon_34406.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -24.581, lng: -54.050766},
    map: map,
    icon: image
  });  
  var image = 'https://icon-icons.com/icons2/317/PNG/32/house-icon_34406.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -24.565, lng: -54.07},
    map: map,
    icon: image
  });
}
