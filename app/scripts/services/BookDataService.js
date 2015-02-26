angular.module('mevisApp').factory('BookDataService', function () {

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
    return angular.copy(books);
  }

  // revealing API
  return {
    getAllBooks: function() {
      return _getAllBooks();
    }
  };
});