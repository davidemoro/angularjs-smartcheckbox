'use strict';

describe('Directive: smartCheckbox', function () {

  // load the directive's module
  beforeEach(module('angularjsSmartcheckboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Two elements should appear', inject(function ($compile) {
    scope.checkboxList = [
      {id: '001', label:'First item'},
      {id: '002', label:'Second item'},
    ];
    element = angular.element('<smart-checkbox model="checkboxList"></smart-checkbox>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('input.smart').length).toBe(2);
  }));

/*
  it('Element filtering by id', inject(function ($compile) {
    scope.checkboxList = [
      {id: '001', label:'First item'},
      {id: '002', label:'Second item'},
    ];
    element = angular.element('<smart-checkbox model="checkboxList"></smart-checkbox>');
    element = $compile(element)(scope);
    expect(element.find('input.smart').length).toBe(2);
    element.find('.filtercontrols input').value('001');
    expect(element.find('input.smart').length).toBe(1);
  }));

  it('Element filtering by label', inject(function ($compile) {
    scope.checkboxList = [
      {id: '001', label:'First item'},
      {id: '002', label:'Second item'},
    ];
    element = angular.element('<smart-checkbox model="checkboxList"></smart-checkbox>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('input.smart').length).toBe(2);
    element.find('.filtercontrols input').value('Sec');
    expect(element.find('input.smart').length).toBe(1);
  })); */
});
