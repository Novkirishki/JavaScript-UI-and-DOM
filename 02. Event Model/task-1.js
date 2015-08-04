/* globals $ */

function solve() {
	return function (selector) {
		var domElement,
			buttons,
			contents;
    
		// checks if the selector is DOM element or an id, in which case selects the element -> domElement
		if (!selector.tagName && typeof (selector) != 'string') {
			throw new Error('Invalid element');
		} else if (typeof (selector) == 'string') {
			domElement = document.getElementById(selector)
		} else {
			domElement = selector;
		}

		buttons = domElement.getElementsByClassName('button');
		contents = domElement.getElementsByClassName('content');

		for (var index in buttons) {
			buttons[index].innerHTML = 'hide';
		}
		document.prev

		domElement.addEventListener('click', function (ev) {
			var eventTarget = ev.target,
				evTargetNextDivSibling = eventTarget.nextElementSibling;

			if (eventTarget.className == 'button') {
				
				while (evTargetNextDivSibling != null && evTargetNextDivSibling.className != 'content') {
					evTargetNextDivSibling = evTargetNextDivSibling.nextElementSibling;
				}
				
				if (evTargetNextDivSibling != null) {
					if (evTargetNextDivSibling.style.display == 'none') {
						evTargetNextDivSibling.style.display = '';
						eventTarget.innerHTML = 'hide';
					} else {
						evTargetNextDivSibling.style.display = 'none';
						eventTarget.innerHTML = 'show';
					}
				}
			}
		}, false);
    };
};

module.exports = solve;