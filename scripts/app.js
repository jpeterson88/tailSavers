var tailApp = angular.module('tailApp', [
  'ui.router'
]);





tailApp.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state("about", {
        url:'../views/about',
        templateUrl: '../views/about.html',
        controller: 'aboutcontroller',
      })
    .state("search", {
        url:'../views/search',
        templateUrl: '../views/search.html',
        controller: 'searchcontroller',
      });
  }
]);