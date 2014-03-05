'use strict';

angular.module('angularjsSmartcheckboxApp')
  .directive('smartCheckbox', ['$filter', function ($filter) {
    return {
      templateUrl: 'views/smartcheckbox.html',
      restrict: 'E',
      replace: true,
      scope: {model: '=',
        requiredfn: '&?'
      },
      link: function ($scope, $element, $attrs) {
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
        $scope.elements = function() {
            // TODO: reimplement with watch on filter, orderby and reverse?
            var filtered, ordered;

            filtered = $filter('filter')($scope.model, {$: $scope.filter});
            ordered = $filter('orderBy')(filtered, $scope.orderby, $scope.reverse);

            $scope.filtered = ordered.length ? ordered : $scope.model;
            return $scope.filtered;
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
      }
    };
  }]);
