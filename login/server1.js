var http = require('http');
var port = 1337;

http.createServer(function(req res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	res.end("Heafdj;akdfjkds;");
}).listen(port);

console.log("running on port: " + port);