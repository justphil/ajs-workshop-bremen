angular.module('mevisApp').controller('ColorPickerCtrl', function($scope) {
  console.log('ColorPickerCtrl scope ->', $scope);

  $scope.r = 10;
  $scope.g = 10;
  $scope.b = 10;

  $scope.increase = function() {
    $scope.r += 10;
    $scope.g += 10;
    $scope.b += 10;
  };

});