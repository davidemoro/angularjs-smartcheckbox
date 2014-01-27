'use strict';

describe('Directive: smartCheckbox', function () {

  // load the directive's module
  beforeEach(module('angularjsSmartcheckboxApp', 'views/smartcheckbox.html'));

  var element,
    $scope;

  beforeEach(inject(function ($rootScope, $compile) {
    $scope = $rootScope.$new();
    $scope.model = [
      {id: '001', label:'First item'},
      {id: '002', label:'Second item'},
    ];
    element = $compile('<smart-checkbox model="model"></smart-checkbox>')($scope);
    $scope.$digest();
   
    
  }));


  it('Two elements should appear', inject(function ($compile) {

    debugger;  // nothing
    dump(element);
    dump(element.find('.smart'));
    dump(element.find('input'));
    dump(element.find('input.smart'));
    expect(element.find('.smart').length).toBe(2);
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
