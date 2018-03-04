/* Data points defined as an array of LatLng objects */
var heatmapData = [
  new google.maps.LatLng(37.578335, -77.537486),
  new google.maps.LatLng(37.578435, -77.537386),
  new google.maps.LatLng(37.578635, -77.537286),
  new google.maps.LatLng(37.578435, -77.537326),
  new google.maps.LatLng(37.578435, -77.537356),
  new google.maps.LatLng(37.578435, -77.537366),
  new google.maps.LatLng(37.578809, -77.536300),
  new google.maps.LatLng(37.577805, -77.538167),
  new google.maps.LatLng(37.577134, -77.538532),
  new google.maps.LatLng(37.578494, -77.535388),
  new google.maps.LatLng(37.576120, -77.537135)
  //if((x<37.578661 && x>37.578165) &&(x<-77.536717 && x>-77.537769))
 
 //Jepson corner  37.578165, -77.537769
                  //37.578661, -77.536717
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


