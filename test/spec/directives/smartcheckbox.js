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

    expect($element.find('.checkboxes input').length).toBe(2);
  });

  it('model update', function () {

    expect($rootScope.model.length).toBe(2);
    expect(scope.model.length).toBe(2);

    scope.model = [{id:'1', label:'1'}];
    scope.$apply();

    expect($element.find('.checkboxes input').length).toBe(1);
  });

  it('Labels order (reverse)', function () {

    var isolateScope = $element.isolateScope();
    isolateScope.reverse = true;
    isolateScope.orderby = 'label';
    isolateScope.$apply();

    expect($element.find('.itemid').eq(0).text()).toBe('[002]');
  });

  it('Filter by label', function () {

    var isolateScope = $element.isolateScope();
    isolateScope.filter = 'Firs';
    isolateScope.$apply();

    expect($element.find('.itemid').text()).toBe('[001]');
  });

  it('Select item should alter model', function () {

    expect($rootScope.model[0].value).toBe(undefined);
    $element.find('.checkboxes input').eq(0).click();
    expect($rootScope.model[0].value).toBe(true);
  });

  it('Select item should show badge (remove on click)', function () {

    expect($element.find('.selectedcontrols .itemid').length).toBe(0);
    $element.find('.checkboxes input').eq(0).click();
    expect($element.find('.selectedcontrols .itemid').length).toBe(1);
    expect($rootScope.model[0].value).toBe(true);
    $element.find('.selectedcontrols .badge').eq(0).click();
    expect($rootScope.model[0].value).toBe(false);
  });

});
