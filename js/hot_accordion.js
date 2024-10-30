jQuery(document).ready(function(){

	// Accordion
	
	jQuery('.wp-block-hotblocks-accordion .accordion-heading').on('click', function(){

		if ( ! jQuery(this).hasClass('active_tab') ) {

			jQuery('.accordion-heading.active_tab').next().slideToggle(100);
			jQuery('.accordion-heading.active_tab').removeClass('active_tab');

			jQuery(this).next().slideToggle(100);
			jQuery(this).toggleClass('active_tab');

		} else {

			jQuery(this).next().slideToggle(100);
			jQuery(this).toggleClass('active_tab');
			
		}

	});

});