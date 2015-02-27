'use strict';


describe('Directive: messageDialog', function() {

  var $rootScope, $compile;


  var template = '<message-dialog visible="dialogVisible" \
                    title="dialogTitle" \
                    on-yes="performDeletion()" \
                    on-no="cancelDeletion()"> \
                      Wollen Sie das Buch &quot;{{ bookToDelete.title }}&quot; wirklich löschen? \
                 </message-dialog>';


  beforeEach(module('mevisApp'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  it('should properly set the provided title', function() {
    var parentScope = $rootScope.$new();

    parentScope.dialogTitle = "TEST_TITLE";

    var linkFn = $compile(template);
    var jqElement = linkFn(parentScope);
    parentScope.$apply();

    console.log('jqElement', jqElement);


    expect(jqElement.find('div.title').text()).toEqual(parentScope.dialogTitle);
  });

  it('should get an own scope', function() {
    var parentScope = $rootScope.$new();
    var linkFn = $compile(template);
    var jqElement = linkFn(parentScope);
    parentScope.$apply();

    var directiveScope = angular.element(jqElement.children()[0]).scope();
    expect(parentScope.$id).not.toBe(directiveScope.$id);
  });

  it('should get an isolated scope', function() {
    var parentScope = $rootScope.$new();

    parentScope.test = 'test';

    var linkFn = $compile(template);
    var jqElement = linkFn(parentScope);
    parentScope.$apply();

    var directiveScope = angular.element(jqElement.children()[0]).scope();
    expect(directiveScope.test).toBeUndefined();
  });


});