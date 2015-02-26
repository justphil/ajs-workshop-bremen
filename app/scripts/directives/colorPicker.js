angular.module('mevisApp').directive('colorPicker', function() {

  // DDO = Directive Definition Object
  return {
    restrict: 'E', // E = element / tag
    templateUrl: 'templates/directives/colorPickerTemplate.html',
    scope: {
      r: '@initR',
      g: '@initG',
      b: '@initB'
    },
    link: function() {
      console.log('colorPicker instance created!');
    }
  };

});