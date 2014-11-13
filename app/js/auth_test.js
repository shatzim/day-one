'use strict';

describe('myApp.auth module', function() {
 
  beforeEach(module('myApp.auth'));

  // Test service availability
  it('check the existence of myApp_Auth factory', inject(function(myApp_Auth) {
    expect(myApp_Auth).toBeDefined();
  }));
});