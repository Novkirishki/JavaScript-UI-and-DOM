function solve(){
  return function(){
    $.fn.listview = function(data){
      var parent = $(this),
	  	  html = $("#" + parent.attr('data-template')).html();
		  
	  var htmlTemplate = handlebars.compile(html);
	  
	  for (var index = 0; index < data.length; index++) {
		  parent.append(htmlTemplate(data[index]));		  
	  }	
	  
	  return parent;
    };
  };
}

module.exports = solve;