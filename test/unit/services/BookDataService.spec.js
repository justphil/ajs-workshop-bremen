'use strict';


describe('Service: BookDataService', function() {

  var BookDataService, $rootScope;

  beforeEach(module('mevisApp'));

  beforeEach(inject(function(_BookDataService_, _$rootScope_) {
    BookDataService = _BookDataService_;
    $rootScope = _$rootScope_;
  }));

  describe('Duck Typing', function() {
    it('should contain a getAllBooks() function', function() {
      expect(angular.isFunction(BookDataService.getAllBooks)).toBe(true);
    });

    it('should contain a getBookByIsbn() function', function() {
      expect(angular.isFunction(BookDataService.getBookByIsbn)).toBe(true);
    });
  });

  describe('getAllBooks()', function() {
    it('should return book array copies', function() {
      var books1, books2;

      BookDataService.getAllBooks().then(function(booksCopy) {
        books1 = booksCopy;
      });

      BookDataService.getAllBooks().then(function(booksCopy) {
        books2 = booksCopy;
      });

      $rootScope.$apply();

      expect(books1).not.toBe(books2);
    });

    it('should return an array of book objects', function() {
      var booksCopy;

      BookDataService.getAllBooks().then(function(_booksCopy) {
        booksCopy = _booksCopy;
      });

      // synchronously resolve the promise
      $rootScope.$apply();

      expect(angular.isArray(booksCopy)).toBe(true);
      expect(booksCopy.length).toBeGreaterThan(0);

      booksCopy.forEach(function(book) {
        expect(isBook(book)).toBe(true);
      });
    });
  });

  describe('getBookByIsbn()', function() {
    it('should return a copy of a book', function() {
      var book1 = BookDataService.getBookByIsbn('111-111-111');
      var book2 = BookDataService.getBookByIsbn('111-111-111');
      expect(book1).not.toBe(book2)
    });

    it('should return the corresponding book object', function() {
      var book = BookDataService.getBookByIsbn('111-111-111');
      expect(book).toBeDefined();
      expect(isBook(book)).toBe(true);
    });

    it('should throw an exception in case of not available isbn', function() {
      expect(function() {
        BookDataService.getBookByIsbn('not-available');
      }).toThrow();
    });
  });


  function isBook(book) {
    return angular.isDefined(book) && angular.isDefined(book.title)
      && angular.isDefined(book.subtitle)
      && angular.isDefined(book.author)
      && angular.isDefined(book.isbn);
  }

});