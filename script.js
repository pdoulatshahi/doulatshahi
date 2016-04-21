$(document).ready(function(){
	$(".nav-links a").click(function(e){
		e.preventDefault();
		var index = $(this).parent("li").index();
		var el = $("section:eq(" + index + ")");
		$('html,body').animate({
		   scrollTop: el.offset().top - 50
		}, 1000);

	})
})