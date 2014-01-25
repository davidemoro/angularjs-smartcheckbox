'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsSmartcheckboxApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('example smart list length', function () {
    expect(scope.smartList.length).toBe(2);
  });

  it('smart list data', function () {
    expect(scope.smartList[0]).id.toBe('001');
    expect(scope.smartList[1]).id.toBe('002');
  });
});
