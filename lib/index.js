
var Server = require('./server');

function createServer(options) {

	var server = new Server(options);

	return (server);
}

module.exports.createServer = createServer;