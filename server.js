var app = require('express')();
var http = require('http').createServer(app);
var io = require ('socket.io')(http);
var expressLayouts = require('express-ejs-layouts');
var spawn = require('child_process').spawn;
var monitor = require('os-monitor');
var stream = monitor.start({ delay: 60, stream: true });

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts)
app.use(require('express').static(__dirname + '/public'));



app.get('/', function(req, res){
	res.render('index', {layout: 'layout'})
});

app.set('port', (process.env.PORT || 3000))

module.exports = http
if (!module.parent) {
  console.log('Server running on port 3000')
  http.listen(app.get('port'), function () {
    console.log("Node app is running at port:" + app.get('port'))
  });
};


var stream = monitor.start({ delay: 60, stream: true });


io.on('connection', function(socket){
	stream.on('monitor', function(event){
		var loadavg = Math.floor(event.loadavg[0]*100);
		socket.emit('usage', {usage: loadavg});
	});
});


