var server = require('./lib').createServer();

server.listen(8081,function (){
	console.log('ready');
});