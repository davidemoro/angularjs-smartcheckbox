'use strict';

angular.module('angularjsSmartcheckboxApp')
  .directive('smartCheckbox', [function () {
    return {
      templateUrl: 'views/smartcheckbox.html',
      restrict: 'E',
      replace: true,
      scope: {model: '=',
        requiredFn: '&?'      // TODO: detect if the optional requiredFn is not an empty function
      },
      controller: ['$scope', function ($scope) {
        // Attrs: $scope, $element, $attrs
        // TODO: Best Practice: use controller when you want to expose an API to other directives. Otherwise use link. 
        $scope.orderby = 'label';

        $scope.unselect = function (item) {
          item.value = false;
        };

        $scope.unselectAll = function () {
            angular.forEach($scope.filtered, function (value) {
              // Attrs: value, key
              value.value = false;
            });
          };
        $scope.selectAll = function () {
            angular.forEach($scope.filtered, function (value) {
              // Attrs: value, key
              value.value = true;
            });
          };
        $scope.toggleAll = function () {
            angular.forEach($scope.filtered, function (value) {
              // Attrs: value, key
              value.value = !value.value;
            });
          };
      }]
    };
  }]);
