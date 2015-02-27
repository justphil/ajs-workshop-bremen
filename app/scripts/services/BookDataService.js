
angular.module('mevisApp').value('enhancement', function() {
  return 'I am an enhancement!'
});

angular.module('mevisApp').provider('BookDataService', function () {

  var _baseUrl = 'http://localhost:8080';

  this.setBaseUrl = function(baseUrl) {
    _baseUrl = baseUrl;
  };

  this.getBaseUrl = function() {
    return _baseUrl;
  };

  this.$get = function($http, enhancement, DataEnhancer) {

    DataEnhancer.setEnhancement(enhancement());

    // private impl.
    function _getAllBooks() {
      return $http.get(_baseUrl + '/books').then(function(result) {
        return result.data;
      }).then(function(books) {
        books.forEach(function(b) {
          b.subtitle += DataEnhancer.enhance(b.subtitle);
        });

        return books;
      });
    }

    function _getBookByIsbn(isbn) {
      return $http.get(_baseUrl + '/books/' + isbn).then(function(result) {
        return result.data;
      });
    }

    function _deleteBookByIsbn(isbn) {
      return $http.delete(_baseUrl + '/books/' + isbn).then(function(result) {
        return result.data;
      });
    }

    function _createBook(book) {
      return $http.post(_baseUrl + '/books', book).then(function(result) {
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
      },
      createBook: function(book) {
        return _createBook(book);
      }
    };

  };

});