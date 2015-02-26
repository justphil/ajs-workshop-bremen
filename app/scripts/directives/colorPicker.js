angular.module('mevisApp').directive('colorPicker', function() {

  // DDO = Directive Definition Object
  return {
    restrict: 'E', // E = element / tag
    templateUrl: 'templates/directives/colorPickerTemplate.html',
    scope: {
      rot: '=initR',
      gruen: '=initG',
      blau: '=initB'
    },
    link: function() {
      console.log('colorPicker instance created!');
    }
  };

});