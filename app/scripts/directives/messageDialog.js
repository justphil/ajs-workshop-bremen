angular.module('mevisApp').directive('messageDialog', function () {

  return {
    restrict: 'E',
    scope: {
      visible: '=',
      title: '=',
      onYes: '&',
      onNo: '&'
    },
    templateUrl: 'templates/directives/messageDialogTemplate.html',
    transclude: true
  };

});