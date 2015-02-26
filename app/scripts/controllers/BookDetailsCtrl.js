angular.module('mevisApp').controller('BookDetailsCtrl', function($scope, $location, $routeParams, BookDataService) {

  var isbn = $routeParams.isbn;

  BookDataService.getBookByIsbn(isbn).then(function(b) {
    $scope.book = b;
  }).catch(function(error) {
    console.log('an error occurred', error);
    $location.path('/books');
  });

});