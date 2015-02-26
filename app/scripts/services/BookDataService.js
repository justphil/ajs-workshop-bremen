angular.module('mevisApp').factory('BookDataService', function ($q, $timeout) {

  // private stuff
  var books = [
    {
      title: "JavaScript für Enterprise-Entwickler",
      subtitle: "Professionell programmieren im Browser und auf dem Server",
      isbn: "111-111-111",
      author: 'test'
    },
    {
      title: "C++ für Enterprise-Entwickler",
      subtitle: "Professionell programmieren im Browser und auf dem Server",
      isbn: "222-222-222",
      author: 'foo'
    },
    {
      title: "Go für Enterprise-Entwickler",
      subtitle: "Professionell programmieren im Browser und auf dem Server",
      isbn: "333-333-333",
      author: 'bar'
    }
  ];

  // private impl.
  function _getAllBooks() {
    return $q.when(angular.copy(books));
  }

  function _getBookByIsbn(isbn) {
    var filteredBooks = books.filter(function(b) {
      return b.isbn == isbn;
    });

    if (filteredBooks.length > 0) {
      return $q.when(angular.copy(filteredBooks[0]));
    }

    return $q.reject(new Error('Book with isbn "' + isbn + '" not found!'));
  }

  // revealing API
  return {
    getAllBooks: function() {
      return _getAllBooks();
    },
    getBookByIsbn: function(isbn) {
      return _getBookByIsbn(isbn);
    }
  };
});