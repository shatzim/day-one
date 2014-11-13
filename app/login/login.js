'use strict';

angular.module('myApp.login', [
  'ngRoute',
  'myApp.auth'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', 'myApp_Auth', function($scope, auth) {
  $scope.auth = auth;
}]);