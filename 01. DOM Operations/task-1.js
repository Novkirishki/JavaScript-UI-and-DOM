/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {

	return function (element, contents) {
		var domElement;

		if (!element.tagName && typeof (element) != 'string') {
			throw new Error('Invalid element');
		} else if (typeof (element) == 'string') {
			domElement = document.getElementById(element)
		} else {
			domElement = element;
		}

		if (!Array.isArray(contents)) {
			throw new Error('Invalid content')
		}

		var documentFragment = document.createDocumentFragment();
		var div = document.createElement('div');

		for (var index = 0, len = contents.length; index < len; index++) {
			if (typeof(contents[index]) !== 'number' && typeof(contents[index]) != 'string') {
				throw new Error("Invalid content");
			}

			var currentDiv = div.cloneNode(true);
			currentDiv.innerHTML = contents[index];
			documentFragment.appendChild(currentDiv);
		}
	
	
		// clear element and then append divs
		domElement.innerHTML = '';
		domElement.appendChild(documentFragment);
	}
};