(function(){
	var alertsSubscription = events.subscribe('/content.alerts', function() {
		// Do something now that the event has occurred
		alertsInit();
	});

	var alertsInit = function() {
		console.log('We are in alerts');
	}	
})();