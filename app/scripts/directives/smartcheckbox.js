'use strict';

angular.module('angularjsSmartcheckboxApp')
  .directive('smartCheckbox', [function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the smartCheckbox directive');
      }
    };
  }]);
