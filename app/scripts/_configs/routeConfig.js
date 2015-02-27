angular.module('mevisApp').config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'templates/routes/root.html',
    controller: 'RootCtrl'
  }).when('/books/:isbn', {
    templateUrl: 'templates/routes/bookDetails.html',
    controller: 'BookDetailsCtrl'
  }).when('/newbook', {
    templateUrl: 'templates/routes/newBook.html',
    controller: 'NewBookCtrl'
  }).when('/books', {
    templateUrl: 'templates/routes/bookList.html',
    controller: 'BookListCtrl'
  }).otherwise({
    redirectTo: '/'
  });




});