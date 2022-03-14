jQuery(document).ready(function(){ 

	// Home owlCarousel

	jQuery('.slider_owl_area').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		autoplay:false,
		navText: ['<img src="assets/images/icon/angle-left.png">', '<img src="assets/images/icon/angle-right.png">'],
		dots:false,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			
			},
			768:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});

	

		
		
	

});