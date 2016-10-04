window.onload = (function() {
	var loginSubscription = events.subscribe('/login', function() {
		// Do something now that the event has occurred
		panelInit();
	});
	var logoContainer = $('#logo-container');
	var loginFormHolder = $('#login-form-holder');
	var panelContent = $('.form-holder');
	var header = $('.header');

	var content = $('.content');

	var panelInit = function() {
		// initialize transition
		// show panel 
		console.log('We start with initialization');
		/*loginFormHolder.css('position', 'absolute');
		loginFormHolder.css('top', '10px');*/
		panelContent.empty();

		loginFormHolder.addClass('login-form-panel-active');
		header.addClass('panel-active');
		setTimeout(function(){
			content.addClass('panel-active');
			//panelContent.load('templates/panel.html');
			$.ajax({
			    url: "templates/panel.html",
			    cache: false,
			    dataType: "html",
			    success: function(data) {
			        panelContent.html(data);
			    }
			});


			panelContent.addClass('panel-holder');
			panelContent.removeClass('form-holder');
		}, 500);

			
	}
})();