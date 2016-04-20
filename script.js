$(document).ready(function(){
	$(".nav-links a").click(function(e){
		e.preventDefault();
		var index = $(this).parent("li").index();
		console.log(index);
		var el = $("section:eq(" + index + ")");
		console.log(el)
		$('html,body').animate({
		   scrollTop: el.offset().top - 30
		}, 1000);

	})
})