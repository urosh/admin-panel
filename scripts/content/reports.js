(function(){
	var reportsSubscription = events.subscribe(eventNames.reports._INIT_, function() {
		// Do something now that the event has occurred
		reportsInit();
	});

	var reportsInit = function() {
		console.log('We are in reports');
	}	
})();