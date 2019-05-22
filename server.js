var http = require('http');
var handleRequest = function(request, response) {
    response.writeHead(200);
    console.log("received connection request: " + request.connection.remoteAddress);
      response.end("Hello NEW World!");
}
var www = http.createServer(handleRequest);
www.listen(8080);
