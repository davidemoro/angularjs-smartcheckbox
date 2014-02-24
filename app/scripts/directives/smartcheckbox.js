'use strict';

angular.module('angularjsSmartcheckboxApp')
  .directive('smartCheckbox', [function () {
    return {
      templateUrl: 'views/smartcheckbox.html',
      restrict: 'E',
      replace: true,
      scope: {model: '=',
        requiredfn: '&?'
      },
      controller: ['$scope', '$attrs', function ($scope, $attrs) {
        // Attrs: $scope, $element, $attrs
        // TODO: Best Practice: use controller when you want to expose an API to other directives. Otherwise use link. 
        $scope.orderby = 'label';

        $scope.isRequired = function () {
          // we cannot rely on $scope.requiredfn, see https://github.com/angular/angular.js/issues/6404#issuecomment-35818595
          return $attrs.requiredfn;
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
