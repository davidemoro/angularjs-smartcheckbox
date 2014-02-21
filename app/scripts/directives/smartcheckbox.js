'use strict';

angular.module('angularjsSmartcheckboxApp')
  .directive('smartCheckbox', [function () {
    return {
      templateUrl: 'views/smartcheckbox.html',
      restrict: 'E',
      replace: true,
      scope: {model: '=',
        requiredFn: '&?'
      },
      controller: ['$scope', function ($scope) {
        // Attrs: $scope, $element, $attrs
        // TODO: Best Practice: use controller when you want to expose an API to other directives. Otherwise use link. 
        $scope.orderby = 'label';

        $scope.isRequired = function () {
          return $scope.requiredFn !== undefined && $scope.requiredFn() !== undefined;
        };

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
