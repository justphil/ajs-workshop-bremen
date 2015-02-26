angular.module('mevisApp').controller('BookListCtrl', function($scope, BookDataService) {

  BookDataService.getAllBooks().then(function(booksCopy) {
    $scope.books = booksCopy;
  });

});