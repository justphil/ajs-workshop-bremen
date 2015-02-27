'use strict';


describe('Service: BookDataService', function() {

  var BookDataService, $rootScope, $httpBackend;

  var baseUrl = 'http://ajs-workshop.herokuapp.com/api';

  beforeEach(module('mevisApp'));

  beforeEach(inject(function(_BookDataService_, _$rootScope_, _$httpBackend_) {
    BookDataService = _BookDataService_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));


  beforeEach(function() {
    // trained http responses
    $httpBackend.when('GET', baseUrl + '/books').respond([]);
    $httpBackend.when('GET', baseUrl + '/books/test').respond({});
    $httpBackend.when('DELETE', baseUrl + '/books/test').respond(true);
  });

  // ensure that there are no outstanding expectation and requests
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  describe('Duck Typing', function() {
    it('should contain a getAllBooks() function', function() {
      expect(angular.isFunction(BookDataService.getAllBooks)).toBe(true);
    });

    it('should contain a getBookByIsbn() function', function() {
      expect(angular.isFunction(BookDataService.getBookByIsbn)).toBe(true);
    });

    it('should contain a deleteBookByIsbn() function', function() {
      expect(angular.isFunction(BookDataService.deleteBookByIsbn)).toBe(true);
    });
  });

  describe('getAllBooks()', function() {
    it('should perform the corresponding http request', function() {
      $httpBackend.expectGET(baseUrl + '/books');
      BookDataService.getAllBooks();
      $httpBackend.flush();
    });
  });

  describe('getBookByIsbn()', function() {
    it('should perform the corresponding http request', function() {
      $httpBackend.expectGET(baseUrl + '/books/test');
      BookDataService.getBookByIsbn('test');
      $httpBackend.flush();
    });
  });

  describe('deleteBookByIsbn()', function() {
    it('should properly delete a book object', function() {
      $httpBackend.expectDELETE(baseUrl + '/books/test');
      BookDataService.deleteBookByIsbn('test');
      $httpBackend.flush();
    });
  });


  function isBook(book) {
    return angular.isDefined(book) && angular.isDefined(book.title)
      && angular.isDefined(book.subtitle)
      && angular.isDefined(book.author)
      && angular.isDefined(book.isbn);
  }

});