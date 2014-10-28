var app = require('express')();
var http = require('http').createServer(app);
var io = require ('socket.io')(http);
var expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(expressLayouts)


app.get('/', function(req, res){
	res.render('index', {layout: 'layout'})
});

http.listen(2000, function(){
	console.log('listening on port 2000')
});

