angular.module('mevisApp').controller('MainCtrl', function($scope, $interval) {
  $scope.now = 'Loading...';

  $interval(function() {
    $scope.now = new Date();
  }, 1000);
});