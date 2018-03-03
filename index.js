var map;
<<<<<<< HEAD


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
      
=======
var x;

function setCookie() {
  document.cookie = "username = John;";
}
function getCookie() {
  alert(document.cookie);
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.580052, lng: -77.540974 },
    zoom: 15
  });

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
  //compatibility for firefox and chrome
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({
      iceServers: []
  }),
  noop = function() {},
  localIPs = {},
  ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
  key;

  function iterateIP(ip) {
      if (!localIPs[ip]) onNewIP(ip);
      localIPs[ip] = true;
  }

   //create a bogus data channel
  pc.createDataChannel("");

  // create offer and set local description
  pc.createOffer().then(function(sdp) {
      sdp.sdp.split('\n').forEach(function(line) {
          if (line.indexOf('candidate') < 0) return;
          line.match(ipRegex).forEach(iterateIP);
      });
      
      pc.setLocalDescription(sdp, noop, noop);
  }).catch(function(reason) {
      // An error occurred, so handle the failure to connect
  });

  //listen for candidate events
  pc.onicecandidate = function(ice) {
      if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
      ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}

// Usage

getUserIP(function(ip){
  alert("Got IP! :" + ip);
});
>>>>>>> 2fd12a747cb6be4580cd603598d06ac18de9eff1


