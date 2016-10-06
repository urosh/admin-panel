(function(){
	var sendMessageButton,
		dashboardContent,
		messageInputContent,
		cultures = 'All cultures',
		culturesSelection,
		userType = 'All users',
		userSelection,
		messageType = 'Type: Alert',
		messageTypeSelection,
		languages = [],
		inputs,
		messageSubscription;
	
	dashboardContent = $('#dashboard-content');
	

	messageSubscription = events.subscribe(eventNames.messages._INIT_, function() {
		// Do something now that the event has occurred
		$.ajax({
		    url: "templates/messages.html",
		    cache: false,
		    dataType: "html",
		    success: function(data) {
		    	// Set panel data
		    	dashboardContent.empty();
		        dashboardContent.html(data);
		        messageInputContent = $('.messages-input-holder .row');

		        events.subscribe(eventNames.languages._SET_LANGUAGES_, function(data) {
		        	data.forEach(function(lang) {
		        		languages.push(lang);
		        	});
	        		messagesInit();
		        });
		        events.publish(eventNames.languages._GET_LANGUAGES_, null);
		    }
		});

		
	});

	function messagesInit() {
		$('.selectpicker').selectpicker({
		  	size: 4
		});

		$('.selectpicker.cultures').change(function(e){
			cultures = $(e.currentTarget).find("option:selected").text();
		})
		$('.selectpicker.users').change(function(e){
			userType = $(e.currentTarget).find("option:selected").text();
		})
		$('.selectpicker.alert').change(function(e){
			messageType = $(e.currentTarget).find("option:selected").text();
		})
		languages.forEach(function(lang, index) {
			// load message-input templates
			messageInputContent.empty();
			$.ajax({
			    url: "templates/message-input.html",
			    cache: false,
			    dataType: "html",
			    success: function(data) {
			    	// Set panel data
			    	messageInputContent.append(data);
			    	var currentElement = $(messageInputContent.find('.message-input')[index]);
			    	$(currentElement.find('span')).text(lang);
			    	currentElement.attr('data-language', lang);
			    	currentElement.addClass(lang+ '-input');
			    	//currentInput.attr('data-lang', lang);
			    }
			});
		});

		sendMessageButton = $('.message-btn');
		sendMessageButton.click(sendMessage);
	}

	
	function sendMessage() {
		console.log('Sending messages');
		// I need values of three select buttons, and all available inputs and their actions. 
		var messages = {
			cultures: cultures,
			userType: userType,
			messageType: messageType,
			content: {}
		};
		languages.forEach(function(lang) {
			var text = $('.' + lang + '-input textarea').val();
			var action = $('.' + lang + '-input input').val();
			messages.content[lang] = {
				text: text,
				action: action
			};
		})
		// Send data to push server 
		
	}	
})();