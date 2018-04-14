// // - Prevent a form submission with the ```event.preventDefault()```function // 
	
// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded 
	$( document ).ready(function() {
  // Handler for .ready() called.
	});
// - Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()```handler 

// - If a user clicks "Read More" on the primary column:

	//   - have the text in the ```<p>``` tag slide down along with a "Read Less" link 
	// in the blog post using  ```$.slideDown()``` and ```$.show()```

// 	$('.readmore').click(function(event){
// 	event.preventDefault();
	
// 		$('#show-this-on-click').slideDown().show();
		
// 		$('.readless').show();

// 		$('.main').addClass('main-read-more');

// 		$('html, body').animate({
//     		scrollTop: $("#show-this-on-click").offset().top
// 		}, 1000);



// 	//   - hide the "Read More" link using ```$.hide()```

// 		$('.readmore').hide();

// 	});


// // - If a user clicks "Read Less" on the primary column:

// 	//   - have the ```<p>``` slide up and hide the "Read Less" link using ```$.slideUp()``` and ```$.hide()``` 

// 	$('.readless').click(function(event){
// 	event.preventDefault();
// 		$('#show-this-on-click').slideUp();
// 		$('.readless').hide();
// 		$('.main').removeClass('main-read-more');
// 		$('html, body').animate({
//     		scrollTop: $(".mission").offset().top
// 		}, 1000);


// 	// 	- show the "Read More" link using```$.show()```
// 		$('.readmore').show();
// 	});


// CURRICULUM REGISTRATION FORM

// If the user clicks submit

	$('#register').click(function(event){
	event.preventDefault();
	
		$('#show-on-submit').removeClass('hide') ;

// Hide the form 

		$('.hide-on-submit').hide();

// Show the download button instead

		$('html, body').animate({
    		scrollTop: $(".download-box").offset().top
		}, 1000);

});

// MOBILE CURRICULUM COVER

// If a user clicks the cover

	$('.cover').click(function(event){
	event.preventDefault();
	
		$('.curriculum-form-holder').removeClass('mobile-hide') ;

// Hide the cover

		$('.cover').hide();

});
// // Scroll down after each nav item is clicked

// 	$('.nav-item').click(function(event){
// 		event.preventDefault();

// 		$('html, body').animate({
//     	scrollTop: $(".top-div").offset().top
// 		}, 1000);

// });





