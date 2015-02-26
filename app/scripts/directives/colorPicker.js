angular.module('mevisApp').directive('colorPicker', function() {

  // DDO = Directive Definition Object
  return {
    restrict: 'E', // E = element / tag
    templateUrl: 'templates/directives/colorPickerTemplate.html',
    scope: {
      rot: '@initR',
      gruen: '@initG',
      blau: '@initB',
      onColorChangeFn: '&onColorChangeAttribute'
    },
    link: function(scope) {

      ['rot', 'gruen', 'blau'].forEach(function(c) {
        scope.$watch(c, function(newValue, oldValue) {
          if (newValue != oldValue) {
            scope.onColorChangeFn({
              r : scope.rot,
              g : scope.gruen,
              b : scope.blau
            });
          }
        });
      });

    }
  };

});