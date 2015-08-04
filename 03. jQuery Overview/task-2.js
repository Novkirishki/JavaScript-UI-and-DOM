/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
    if (!(selector instanceof $) && typeof(selector) != 'string') {
      throw new Error('Invalid selector');
    }
    
    var container = $(selector),
        buttons = container.find('.button'),
        contents = container.find('.content');
        
    if (container.length == 0) {
      throw new Error('Nothing selected'); 
    }
        
    buttons.text('hide');
    
    container.on('click', '.button', function() {
      var $this = $(this);
      var nextContent = $this.nextAll('.content')[0];
      nextContent = $(nextContent);
      if (nextContent.css('display') !== 'none') {
        nextContent.hide();
        $this.text('show');
      } else {
        nextContent.css('display', '');;
        $this.text('hide');
      }
    });
  };
};

module.exports = solve;