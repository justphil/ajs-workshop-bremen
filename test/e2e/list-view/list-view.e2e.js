'use strict';

describe('BookMonkey List View', function () {

  it('should properly allow the deletion of books', function () {
    browser.get('http://localhost:8080/#/books');

    var allBooks = element.all(by.repeater('book in books'));
    var firstBookEntry = allBooks.get(0);
    var firstBookEntryDeleteBtn = firstBookEntry.element(by.css('button.button'));
    expect(allBooks.count()).toBe(3);

    firstBookEntryDeleteBtn.click();

    var dialog = element(by.css('div.dialog'));
    var yesButton = dialog.all(by.css('button.action-button')).get(0);

    expect(yesButton.getText()).toEqual('JA');
    yesButton.click();

    expect(allBooks.count()).toBe(2);
  });

});