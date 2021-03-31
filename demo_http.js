var http = require('http');

//create server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'})  //tell the server to display HTTP as HTML
    res.write('Hello World!');  //write a response to the client (browser)
    res.end();  //end the response
}).listen(8080);  //the server object listens on port 8080