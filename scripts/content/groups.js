(function(){
	var groupsSubscription = events.subscribe('/content.groups', function() {
		// Do something now that the event has occurred
		groupsInit();
	});

	var groupsInit = function() {
		console.log('We are in groups');
	}	
})();