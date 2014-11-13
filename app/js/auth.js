'use strict';

angular.module('myApp.auth', ['firebase'])

.factory("myApp_Auth", ["$firebaseSimpleLogin", function($firebaseSimpleLogin) {
  var ref = new Firebase("https://day-one.firebaseio.com/");
  return new $firebaseSimpleLogin(ref);
}])

.factory('myApp_CurrentUser', ['$q', 'myApp_Auth', function($q, auth) {
  var deferred = $q.defer();
  auth.$getCurrentUser().then(
    function(user) { if (user) deferred.resolve(user); else deferred.reject("No user");},
    function(err) { deferred.reject(err); }
    );
  return deferred.promise;
}])

.run(['$rootScope', '$location', function ($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function (event, a, b, c, d) {
    console.log(event,a,b,c,d); 
  });
}]);

  