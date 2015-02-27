angular.module('mevisApp').controller('NewBookCtrl', function ($scope, $location, BookDataService) {
  $scope.createBook = function(book) {
    BookDataService.createBook(book).then(function() {
      $location.path('/books');
    }).catch(function(error) {
      console.warn('error', error);
    });
  };
});