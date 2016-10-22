$(function () {
	$('#action, #close_nav, #capanegra').click(function(){
	
		$('#capanegra').fadeToggle(500);
		$('nav').toggleClass('active_nav');
	
	});
});