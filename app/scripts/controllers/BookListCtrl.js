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
    BookDataService.deleteBookByIsbn($scope.bookToDelete.isbn)
      .then(function(result) {
        if (result) {
          return result;
        } else {
          throw new Error('Book could not be deleted!');
        }
      })
      .then(performLocalDeletion)
      .catch(function(error) {
        console.log('an error occurred', error);
      })
      .finally($scope.cancelDeletion);
  };

  $scope.cancelDeletion = function() {
    console.log('cancelDeletion!');
    $scope.dialogVisible = false;
    delete $scope.dialogTitle;
    delete $scope.bookToDelete;
  };

  function performLocalDeletion() {
    var bookToDeleteIndex = $scope.books.indexOf($scope.bookToDelete);
    if (bookToDeleteIndex != -1) {
      $scope.books.splice(bookToDeleteIndex, 1);
    }
  }

});