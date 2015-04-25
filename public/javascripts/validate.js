// $(document).ready(function() {
//   console.log('time to validate');
//   $("#todoForm").validate();
// });


$(document).ready(function() { // Begins jQuery

console.log('*****VALIDATING*****');



		$( "#todoForm" ).validate({
		  rules: {
		    priority: {
		      required: true,
		      range: [1, 100]
		    },
		    title: {
		    	required: true,
		    	minlength: 5,
		    	maxlength: 32
		    },
		    description: {
		    	required: true,
		    	minlength: 5,
		    	maxlength: 50
		    },
		    due_date: {
		    	required: true,
		    	dateISO: false
		    }
		  }
		});

}); // Ends jQuery
