(function($){
	
	$.fn.github = function(){
		var $ctx = this;
		//$.ajax("https://api.github.com/orgs/IO66/repos",{dataType:"jsonp"}).done(function(data){console.log(data)});
		$.ajax("https://api.github.com/repos/IO66/IO66.org/commits",{dataType:"jsonp"}).done(function(jsonp){
			console.log(jsonp.data);
			for(var i=0,l=jsonp.data.length;i<l;i++) {
				var rec = jsonp.data[i];
				$ctx.append('<li><a href="'+rec.url+'">' + rec.commit.message + '</a></li>');
			}
		});
	};

})(jQuery);