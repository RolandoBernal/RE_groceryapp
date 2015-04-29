// $(document).ready(function() {
//   console.log('time to validate');
//   $("#todoForm").validate();
// });


$(document).ready(function() { // Begins jQuery

console.log('* * * * * VALIDATING * * * * *');



		$( "#todoForm" ).validate({
		  rules: {
		    quantity: {
		      required: true,
		    },
		    item: {
		    	required: true,
		    	minlength: 5,
		    	maxlength: 32
		    },
		    price: {
		      required: true
		  }
		});

}); // Ends jQuery
