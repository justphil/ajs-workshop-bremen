angular.module('mevisApp').controller('BookListCtrl', function($scope, BookDataService) {

  $scope.dialogVisible = false;

  BookDataService.getAllBooks().then(function(booksCopy) {
    $scope.books = booksCopy;
  });

  $scope.delete = function(book) {
    console.log('book to delete', book);
    $scope.dialogVisible = true;
    $scope.dialogTitle = 'Wirklich löschen?';
    $scope.bookToDelete = book;
  };

  $scope.performDeletion = function() {
    console.log('performDeletion!');
  };

  $scope.cancelDeletion = function() {
    console.log('cancelDeletion!');
    $scope.dialogVisible = false;
    delete $scope.dialogTitle;
    delete $scope.bookToDelete;
  };

});