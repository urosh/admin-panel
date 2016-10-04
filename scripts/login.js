(function() {
	var loginButton = $('.login-btn');
	var loginError = $('.login-error');
	var loginErrorContent = $('.login-error-content');
	var userName = $('#username');
	var password = $('#password');

	var liveServerUrl = 'https://lcl.lb.com';
	
	var loginSuccessCallback = function(data) {
		events.publish('/login', null);
	};

	var loginErrorCallback = function(data) {
		loginErrorContent.text('Username and password are not recognized');
	  	loginError.css('visibility', 'visible');
	};


  	$('.login-btn').click(function(e) {
  		if(userName.val() === '' && password.val() === ''){
  			loginErrorContent.text('Username and password could not be empty');
	  		loginError.css('visibility', 'visible');
  			return;
  		}
  		var userData = {
  			"username":   userName.val(),
			"password":  password.val()
  		}
  		

  		$.ajax({
			type: "POST",
			url: liveServerUrl + '/live/auth/login',
			data: JSON.stringify(userData),
			dataType: 'text',
			contentType: "application/json",
			success: loginSuccessCallback,
			error: loginErrorCallback
		});

  		// Check username and password combination
  		/*loginErrorContent.text('Username and password are not recognized');
	  	loginError.css('visibility', 'visible');*/

  	});
})();
