function solve() {
  return function (selector) {
    var optionsSelect = $(selector)
      .removeClass()
      .css({ display: 'none' }),
      container = $('<div />')
        .addClass('dropdown-list'),
      currentOption = $('<div />')
        .addClass('current')
        .attr('data-value', '')
        .html('Option 1'),
      optionsContainer = $('<div />')
        .addClass('options-container')
        .css({
          position: 'absolute',
          display: 'none'
        }),
      options = optionsSelect.children();

    for (var i = 0; i < options.length; i += 1) {
      var option = $(options[i]);
      dropdownOption = $('<div />')
        .addClass('dropdown-item')
        .attr('data-value', i - 1)
        .attr('data-index', i)
        .html(option.html());
      optionsContainer.append(dropdownOption);
    }

    currentOption.on('click', function () {
      var $this = $(this);
      $this.html('Select an option');

      if (optionsContainer.css('display') === 'none') {
        optionsContainer.css('display', '');
      } else {
        optionsContainer.css('display', 'none');
      }
    });

    optionsContainer.on('click', '.dropdown-item', function (ev) {
      var $this = $(this);
      currentOption
        .attr('data-value', $this.attr('data-value'))
        .html($this.html());
        
      optionsContainer.css('display', 'none');
    });

    container
      .append(optionsSelect.clone())
      .append(currentOption)
      .append(optionsContainer);
    optionsSelect.replaceWith(container);
  };
}

module.exports = solve;