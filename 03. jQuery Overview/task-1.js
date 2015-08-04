/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
  return function (selector, count) {
      
    // validations
    count = +count;
    if (typeof(count) != 'number' || count < 1 || isNaN(count)) {
      throw new Error('Invalid count');
    } 
    
    if (typeof(selector) != 'string') {
      throw new Error('Invalid selector');
    }   
    // end of validations
    
    var container = $(selector),
      ul = $('<ul />');

    ul.addClass('items-list');

    for (var index = 0; index < count; index++) {
      var li = $('<li />')
        .addClass('list-item')
        .text('List item #' + index)
        .appendTo(ul);
    }


    container.append(ul);
  };
};

module.exports = solve;