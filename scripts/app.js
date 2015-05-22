var tailApp = angular.module('tailApp', [
  'ui.router', 'uiGmapgoogle-maps', 'ui.router.router']);

tailApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise("/home");

    $stateProvider
    .state("home", {
        url:'/home',
        templateUrl: '../views/home.html',
        controller: 'homecontroller',
      })
    .state("about", {
        url:'/about',
        templateUrl: '../views/about.html',
        controller: 'aboutcontroller',
      })
    .state("search", {
        url:'/search',
        templateUrl: '../views/search.html',
        controller: 'searchcontroller',
      });
  }
]);

//configure GCJ-02
tailApp.config(
    ['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            china: true,
            v: '3.17',
            libraries: 'places'
        });
    }]);
