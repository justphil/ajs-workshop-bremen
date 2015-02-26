angular.module('mevisApp').controller('ColorPickerCtrl', function($scope) {
  console.log('ColorPickerCtrl scope ->', $scope);

  $scope.onColorChange = function(r, g, b) {
    console.log('color has changed', r, g, b);
  };

});