/* Data points defined as an array of LatLng objects */
var somedata= [];
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
  new google.maps.LatLng(37.785, -122.435)
];
var database = firebase.database();
var myJSON;
var somedata= [];
var ref = firebase.database().ref();

var ref = firebase.database().ref();

ref.on("value", function(data) {
  data.forEach(function(data) {
    myJSON = JSON.stringify(data);
/*
  //  var arr = Object.keys(JSON.parse(myJSON)).map(function(k) { return myJSON[k]});
  //  console.log(arr);
    
    var ip = myJSON.substring(31, 42);
    somedata.push(ip);
    console.log(typeof ip);
    console.log(ip);
    
    //somedata.concat(myJSON);
    /*data1 = myJSON;*/
   // obj = JSON.parse(data);

   /*
    somedata.push(ip);
    console.log(somedata[0]);
  */
  }
   
)});

var Richmond = new google.maps.LatLng(37.580052, -77.540974);

map = new google.maps.Map(document.getElementById('map'), {
  center: Richmond,
  zoom: 13,
  mapTypeId: 'roadmap'
});

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData
});
heatmap.setMap(map);


console.log(somedata[0]);