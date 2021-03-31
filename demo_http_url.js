var http = require('http');

// create server object
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });  //tell server to display as HTML
    res.write(req.url); //make the response return the URL
    res.end();  //end the response
}).listen(8080);  //tell the server object to listen on port 8080