'use strict';

describe('Directive: smartCheckbox', function () {

  // load the directive's module
  beforeEach(module('angularjsSmartcheckboxApp', 'views/smartcheckbox.html'));

  var element,
    $compile,
    scope;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    element = null;
    
  }));

  afterEach(function () {
    scope.$destroy();
  });


  it('Two elements should appear', function () {

    element = $compile(angular.element('<smart-checkbox model="model"></smart-checkbox>'))(scope);
    scope.$apply(function () {
      scope.model = [
        {id: '001', label:'First item'},
        {id: '002', label:'Second item'},
      ];
    });
    expect(element.children().eq(3).children().find('input').length).toBe(2);
  });

  it('Labels order', function () {

    element = $compile(angular.element('<smart-checkbox model="model"></smart-checkbox>'))(scope);
    scope.$apply(function () {
      scope.model = [
        {id: '001', label:'First item'},
        {id: '002', label:'Second item'},
      ];
    });
    expect(element.children().eq(3).find('label').eq(0).find('span').text()).toBe('[001]');
    expect(element.children().eq(3).find('label').eq(1).find('span').text()).toBe('[002]');
  });


  it('Labels order (reverse)', function () {

    element = $compile(angular.element('<smart-checkbox model="model"></smart-checkbox>'))(scope);
    scope.$apply(function () {
      scope.model = [
        {id: '001', label:'First item'},
        {id: '002', label:'Second item'}
      ];
      scope.reverse = true;
      scope.orderby = 'id';
    });
    expect(element.children().eq(3).find('label').eq(0).find('span').text()).toBe('[002]');
    expect(element.children().eq(3).find('label').eq(1).find('span').text()).toBe('[001]');
  });

});
