angular.module('mevisApp').controller('BookListCtrl', function($scope, BookDataService) {

  $scope.books = BookDataService.getAllBooks();

});