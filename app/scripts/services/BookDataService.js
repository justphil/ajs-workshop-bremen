angular.module('mevisApp').factory('BookDataService', function ($http) {

  // private stuff
  var baseUrl = 'http://ajs-workshop.herokuapp.com/api';

  // private impl.
  function _getAllBooks() {
    return $http.get(baseUrl + '/books').then(function(result) {
      return result.data;
    });
  }

  function _getBookByIsbn(isbn) {
    return $http.get(baseUrl + '/books/' + isbn).then(function(result) {
      return result.data;
    });
  }

  function _deleteBookByIsbn(isbn) {
    return $http.delete(baseUrl + '/books/' + isbn).then(function(result) {
      return result.data;
    });
  }

  // revealing API
  return {
    getAllBooks: function() {
      return _getAllBooks();
    },
    getBookByIsbn: function(isbn) {
      return _getBookByIsbn(isbn);
    },
    deleteBookByIsbn: function(isbn) {
      return _deleteBookByIsbn(isbn);
    }
  };
});