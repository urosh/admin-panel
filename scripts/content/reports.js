(function(){
	var reportsSubscription = events.subscribe('/content.reports', function() {
		// Do something now that the event has occurred
		reportsInit();
	});

	var reportsInit = function() {
		console.log('We are in reports');
	}	
})();