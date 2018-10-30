
'use strict';

var app = angular.module('myApp', ['ui.router','appGallary','appEditor','appLogin']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/app/gallary");
      
      $stateProvider
  .state('app', {
      url: "/app",
      abstract: true
  })
}]);
