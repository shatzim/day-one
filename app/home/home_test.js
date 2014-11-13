'use strict';

describe('myApp.home module', function() {
 
  beforeEach(module('myApp.home'));

  describe('home controller', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl', {$scope: scope});
    })); 

    it('should have scope defined', inject(function($controller) {
      expect(scope).toBeDefined();
    }));

  });
});