(function(){
	var pushSubscription = events.subscribe('/content.push', function() {
		// Do something now that the event has occurred
		pushInit();
	});

	var pushInit = function() {
		console.log('We are in push');
	}	
})();