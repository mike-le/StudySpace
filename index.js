var map;


function myIP(){ var vi="uses java to get the users local ip number"
var yip2=java.net.InetAddress.getLocalHost();	
var yip=yip2.getHostAddress();
return yip;
}//end myIP

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.580052, lng: -77.540974},
          zoom: 15
        });
              
      infoWindow = new google.maps.InfoWindow;
      
       
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };


            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.'+myIP);
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      f


      document.getElementById("demo").innerHTML = x;
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
      


