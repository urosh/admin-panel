(function(){
	var dashboardContent = $('#dashboard-content');

	var messageSubscription = events.subscribe('/content.messages', function() {
		// Do something now that the event has occurred
		$.ajax({
		    url: "templates/messages.html",
		    cache: false,
		    dataType: "html",
		    success: function(data) {
		    	// Set panel data
		    	dashboardContent.empty();
		        dashboardContent.html(data);
		        messagesInit();
		        

		    }
		});

		
	});

	var messagesInit = function() {
		$('.selectpicker').selectpicker({
		  	size: 4
		});
		console.log($( ".selectpicker" ).val());
		console.log('We are in messages');
	}	
})();