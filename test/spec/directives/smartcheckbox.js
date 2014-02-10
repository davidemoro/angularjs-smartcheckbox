'use strict';

describe('Directive: smartCheckbox', function () {

  // load the directive's module
  beforeEach(module('angularjsSmartcheckboxApp', 'views/smartcheckbox.html'));

  var element,
    $rootScope,
    $compile,
    $element,
    scope;

  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
    $rootScope.model = [
        {id: '001', label:'First item'},
        {id: '002', label:'Second item'}
      ];

    $element = angular.element('<smart-checkbox model="model"></smart-checkbox>');
    element = $compile($element)(scope);
    $rootScope.$apply();
    
  }));


  it('Two elements should appear', function () {

    expect($element.children().eq(3).children().find('input').length).toBe(2);
  });

  it('model update', function () {

    expect($rootScope.model.length).toBe(2);
    expect(scope.model.length).toBe(2);

    scope.model = [{id:'1', label:'1'}];
    scope.$apply();

    expect($element.children().eq(3).children().find('input').length).toBe(1);
  });

  it('Labels order (reverse)', function () {

    $element.isolateScope().reverse = true;
    $element.isolateScope().orderby = 'label';
    $element.isolateScope().$apply();

    expect($element.children().eq(3).find('label').eq(0).find('span').text()).toBe('[002]');
  });

  it('Filter by label', function () {

    var isolateScope = $element.isolateScope();
    isolateScope.filter = 'Firs';
    isolateScope.$apply();

    expect($element.children().eq(3).find('label').eq(0).find('span').text()).toBe('[001]');
  });

});
