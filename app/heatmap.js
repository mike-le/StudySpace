/* Data points defined as an array of LatLng objects */
var heatmapData = [
];

var Richmond = new google.maps.LatLng(37.5843, -77.5734);

map = new google.maps.Map(document.getElementById('map'), {
  center: sanFrancisco,
  zoom: 13,
  mapTypeId: 'roadmap'
});

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData
});
heatmap.setMap(map);