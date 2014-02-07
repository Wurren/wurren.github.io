$(function(){

	$.fireflies({
		bugs : 50,
		color : '#666',
		speed : 1000
	});

	var sizer = function() {
		var wh = $(window).height() - 100;
		$('.wrap').height(wh);
	}

	// $(window).on('resize', sizer());

	$('#email').html(function(){
		var e = "hello",
			a = "@",
			d = "villainyhq",
			c = ".com",
			h = 'mailto:' + e + a + d + c;
		$(this).attr('href', h);
	});

});