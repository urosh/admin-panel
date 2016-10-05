window.onload = (function() {
	var loginSubscription = events.subscribe('/login', function() {
		// Do something now that the event has occurred
		panelInit();
	});
	var logoContainer = $('#logo-container');
	var loginFormHolder = $('#login-form-holder');
	var panelContent = $('.form-holder');
	var header = $('.header');
	var panelRow;
	var content = $('.content');
	var currentMenuItem;
	var menuMessages = [];

	var panelMenuClicked = function(e) {

	}
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
			    	// Set panel data
			        panelContent.html(data);

			        // Populate menu information
			        panelRow = $('.panel-row');
			        currentMenuItem = $(panelRow[0]).attr('data-panel');
			        $(panelRow[0]).addClass('active');
			        // Initialize content
			        events.publish('/content.' + currentMenuItem, null);

			        // Handle user click on the menu
			        panelRow.click(function(e){
			        	panelRow.removeClass('active');
			        	$(e.currentTarget).addClass('active');
			        	// Update current menu item
			        	currentMenuItem = $(e.currentTarget).attr('data-panel');

			        	// Update content
			        	events.publish('/content.' + currentMenuItem, null);
			        });
			    }
			});


			panelContent.addClass('panel-holder');
			panelContent.removeClass('form-holder');
		}, 500);

			
	}
})();