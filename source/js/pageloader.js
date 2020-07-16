jQuery("html").addClass('bonfire-html-onload');
jQuery(document.body).on("touchmove", function(e) {
    e.preventDefault();
});
jQuery(window).load(function() {	
	setTimeout(function(){
		jQuery(document.body).unbind('touchmove');
		jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-fade');
		jQuery("html").removeClass('bonfire-html-onload');
	},750);	
	setTimeout(function(){
		jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-hide');
	},1000);
});