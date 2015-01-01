var socket = io.connect('/')
socket.on('usage', function(data){
	var usage = data.usage
	$('body header section h1').fadeIn(1000, function() {
		$('body header section p').fadeIn(200, function() {
			$('body main meter').delay(200).fadeIn(1000, function() {
				$('body main meter').attr('value', usage)
				$('body main samp').text(usage);
			})
		})
	})
})