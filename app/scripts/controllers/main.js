'use strict';

angular.module('angularjsSmartcheckboxApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.smartlist = {};
    $scope.smartlist.mylist = [
        {id: '001', label: 'First item'},
        {id: '002', label: 'Second item'},
        {id: 'Z01', label: 'Another item'}
      ];
    $scope.smartlist.required = function (elem, selected) {
        // elem is the current elem of the list
        // selected is an array of selected elems
        return angular.isArray(selected) ? selected.length === 0 : true;
      };
  }]);
