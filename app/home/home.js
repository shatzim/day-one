'use strict';

angular.module('myApp.home', [
  'ngRoute',
  'myApp.auth'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
    resolve: {
      user: 'myApp_CurrentUser'
    }
  });
}])

.controller('HomeCtrl', ['$scope', 'myApp_Auth', function($scope, auth) {
  $scope.auth = auth;
  $scope.test = "test";
  console.log($scope);
}]);