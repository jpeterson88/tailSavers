tailApp.controller('homecontroller', function($scope){

$scope.test = "Home"

$scope.map = {
    "center": {
        "latitude": 37,
        "longitude": -122
    },
    "zoom": 15
};


$scope.markers = [

{
    id: 0,
    coords: {
        latitude: 37.4224553,
        longitude: -122.0843062
    },
    options: {draggable : false },
    events: {
      
    }
}, 
{
    id: 1,
    coords: {
        latitude: 33.8887655,
        longitude: -117.8719478
    },
    options: {draggable : false },
    events: {
    
    }
},
{
    id: 2,
    coords: {
        latitude: 33.6841154,
        longitude: -117.8574498
    },
    options: {draggable : false },
    events: {
       
        }
    },
{
    id: 3,
    coords: {
        latitude: 33.8000673,
        longitude: -117.8832376
    },
    options: {draggable : false },
    events: {
    
        }
    }]; 




var events = {
    places_changed: function (searchBox) {
        var place = searchBox.getPlaces();
        if (!place || place == 'undefined' || place.length == 0) {
            console.log('no place data :(');
            return;
        }

        $scope.map = {
            "center": {
                "latitude": place[0].geometry.location.lat(),
                "longitude": place[0].geometry.location.lng()
            },
            "zoom": 18
        };
        $scope.marker = {
            id: 0,
            coords: {
                latitude: place[0].geometry.location.lat(),
                longitude: place[0].geometry.location.lng()
            }
        };
    }
};
$scope.searchbox = { template: '../components/search.tpl.html', events: events, position: 'TOP_LEFT' };

});