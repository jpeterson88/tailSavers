// Lazy loading of Google Map API
//tailApp.service('loadGoogleMapAPI', ['$window', '$q', 
//    function ( $window, $q ) {
//
//        var deferred = $q.defer();
//
//        // Load Google map API script
//        function loadScript() {  
//            // Use global document since Angular's $document is weak
//            var script = document.createElement('script');
//            script.src = 'bower_components/angular-google-maps/dist/angular-google-maps.min.js';
//
//            document.body.appendChild(script);
//        }
//
//        // Script loaded callback, send resolve
//        $window.initMap = function () {
//            deferred.resolve();
//        }
//
//        loadScript();
//
//        return deferred.promise;
//    }]);