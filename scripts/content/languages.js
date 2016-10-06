(function(){
	var languages = ['english', 'polish', 'arabic', 'chinese'];
	


	var pushSubscription = events.subscribe(eventNames.languages._INIT_, function() {
		// Do something now that the event has occurred
		pushInit();
	});

	var getLanguages = events.subscribe(eventNames.languages._GET_LANGUAGES_, function() {
		events.publish(eventNames.languages._SET_LANGUAGES_, languages );
	});

	var pushInit = function() {
		console.log('We are in languages');
	}	
})();