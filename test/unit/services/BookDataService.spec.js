'use strict';


describe('Service: BookDataService', function() {

  var BookDataService;

  beforeEach(module('mevisApp'));

  beforeEach(inject(function(_BookDataService_) {
    BookDataService = _BookDataService_;
  }));

  describe('Duck Typing', function() {
    it('should contain a getAllBooks() function', function() {
      expect(angular.isFunction(BookDataService.getAllBooks)).toBe(true);
    });
  });

  describe('getAllBooks()', function() {
    it('should return book array copies', function() {
      expect(BookDataService.getAllBooks()).not.toBe(BookDataService.getAllBooks());
    });

    it('should return an array of book objects', function() {
      var books = BookDataService.getAllBooks();
      expect(angular.isArray(books)).toBe(true);
      expect(books.length).toBeGreaterThan(0);

      books.forEach(function(book) {
        expect(isBook(book)).toBe(true);
      })
    });
  });


  function isBook(book) {
    return angular.isDefined(book) && angular.isDefined(book.title)
      && angular.isDefined(book.subtitle)
      && angular.isDefined(book.author)
      && angular.isDefined(book.isbn);
  }

});