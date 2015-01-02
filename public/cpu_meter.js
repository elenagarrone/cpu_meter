var socket = io.connect('/')

socket.on('usage', function(data){
  var usage = data.usage
  $('body main meter').attr('value', usage);
  $('body main samp').text(usage);
});
