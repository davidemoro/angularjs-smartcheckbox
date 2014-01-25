'use strict';

describe('Directive: smartCheckbox', function () {

  // load the directive's module
  beforeEach(module('angularjsSmartcheckboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<smart-checkbox></smart-checkbox>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the smartCheckbox directive');
  }));
});
