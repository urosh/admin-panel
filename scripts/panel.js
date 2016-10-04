window.onload = (function() {
	var loginSubscription = events.subscribe('/login', function() {
		// Do something now that the event has occurred
		console.log('We are logged in so we can show admin panel');
	});

	var panelInit = function() {
		// initialize transition
		// show panel 
	}
})();