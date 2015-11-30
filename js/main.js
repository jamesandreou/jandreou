$(window).load(function(){
	//normalize height of terms
	var last = null;
	$('.well').each(function(i){
		if($(this).parents('#education').length <= 0) return;
		if(last != null){
			if($(this).height() < $(last).height()){
				$(this).height($(last).height());
			}else{
				$(last).height($(this).height());
			}
			last = null;
		}else{
			last = this;
		}
	});
	//navbar
	$(window).scroll(function(){
		setSection();
	});
	$('ul.nav li a').each(function(){
		$(this).click(function(){
			event.preventDefault();
			var href = $(this).attr('href');
			var y = $(href).offset().top - $('#header').height();
			$("body").stop().animate({scrollTop:y}, 500, 'swing');
		});
	})
	$('#go-top').click(function(){
		$("body").stop().animate({scrollTop:0}, 500, 'swing');
	});
	setSection();
});

function setSection(){
	var navHeight = parseInt($('#header').outerHeight());
	var scrollY = parseInt($(this).scrollTop());
	var curSection = $('#about').get(0);
	var sectionY = 0;
	$('.section').each(function(){
		sectionY = $(this).offset().top - navHeight - 40;
		if(scrollY >= sectionY && scrollY <= sectionY + $(this).outerHeight()){
			curSection = this;
		}
	});
	if($(window).scrollTop() + $(window).height() > $(document).height() - 20){
		curSection = $('#contact').get(0);
	} 
	$('li a').each(function(){
		var href = $(this).attr('href');
		var section = href.substr(1, href.length-1);
		if($(curSection).attr('id') === section){
			$(this).addClass('current');
		}else{
			$(this).removeClass('current');
		}
	});
}