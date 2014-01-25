'use strict';

angular.module('angularjsSmartcheckboxApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.smartList = [
        {id: '001', label: 'First item'},
        {id: '002', label: 'Second item'}
    ];
  }]);
