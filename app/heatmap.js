var heatmapData = [
    new google.maps.LatLng(37.782, -122.447),
    new google.maps.LatLng(37.782, -122.445),
    new google.maps.LatLng(37.782, -122.443),
    new google.maps.LatLng(37.782, -122.441),
    new google.maps.LatLng(37.782, -122.439),
    new google.maps.LatLng(37.782, -122.437),
    new google.maps.LatLng(37.782, -122.435),
    new google.maps.LatLng(37.785, -122.447),
    new google.maps.LatLng(37.785, -122.445),
    new google.maps.LatLng(37.785, -122.443),
    new google.maps.LatLng(37.785, -122.441),
    new google.maps.LatLng(37.785, -122.439),
    new google.maps.LatLng(37.785, -122.437),
    new google.maps.LatLng(37.582205,  -77.538029)
  ];
  var database = firebase.database();
var position = firebase.database().ref();
position.on('value', function(snapshot){
  updateposition(postElement, snapshot.val());
})


  var Richmond = new google.maps.LatLng(37.578234, -77.536970);
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: Richmond,
    zoom: 15,
    mapTypeId: 'roadmap'
  });
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.setMap(map);